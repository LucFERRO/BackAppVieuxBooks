import { Collection, Db, Document, MongoClient } from "mongodb";
import mongoose from "mongoose";
import request from "supertest";
import app from "../../app";
import { databaseConnection } from "../database/connect";

let connection;
let clientMongo: MongoClient;

beforeAll(async () => {
    connection = await databaseConnection();
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ID}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`
    clientMongo = await MongoClient.connect(uri);
})

describe("POST / - set a spot", () => {
    it("set a spot", async () => {
        const result = await request(app).post("/api/spots").send({ address: "La cabane à bouc" }).set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        const collection = await getCollection('spots', clientMongo);
        const resultToCheck: Document | null = await collection.findOne();

        expect(resultToCheck!['address']).toEqual("La cabane à bouc")
        expect(result.body.address).toEqual("La cabane à bouc");
        expect(result.statusCode).toEqual(200);
    });


    it("check spot & set a book", async () => {
        const spotResult = await request(app).get("/api/spots");

        const collection = await getCollection('spots', clientMongo);
        const resultToCheck: Document | null = await collection.findOne();

        expect(resultToCheck!['address']).toEqual("La cabane à bouc")
        expect(spotResult.body[0].address).toEqual("La cabane à bouc");

        const result = await request(app).post("/api/books")
            .send({
                "name": "Test Book Create",
                "author": "test Test",
                "spot_id": spotResult.body[0]._id
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        const bookCollection = await getCollection('books', clientMongo);
        const bookResultToCheck: Document | null = await bookCollection.findOne();

        expect(result.statusCode).toEqual(200);
        expect(bookResultToCheck!['name']).toEqual("Test Book Create")
        expect(result.body.name).toEqual("Test Book Create");

    });

    it("borrow book", async () => {
        const borrowingUsers = await request(app).get("/api/list");
        const bookCollection = await request(app).get("/api/books");
        const borrowResult = await request(app).put(`/api/books/${bookCollection.body[0]._id}`).send(
            {
            user_id: borrowingUsers.body[0].code
        }
        ).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const bookCollection2 = await getCollection('books', clientMongo);
        const bookResultToCheck: Document | null = await bookCollection2.findOne();

        expect(borrowResult.statusCode).toEqual(200);
        expect(bookResultToCheck!['user_id']).toEqual(borrowingUsers.body[0].code)
        expect(borrowResult.body.message).toEqual("Book successfully updated.");
    })

    it("return book", async () => {
        const bookCollection = await request(app).get("/api/books");
        const borrowResult = await request(app).put(`/api/books/${bookCollection.body[0]._id}`).send({
            user_id: null,
            date: null
        }).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const bookCollection2 = await getCollection('books', clientMongo);
        const bookResultToCheck: Document | null = await bookCollection2.findOne();

        expect(borrowResult.statusCode).toEqual(200);
        expect(bookResultToCheck!['user_id']).toEqual(null)
        expect(bookResultToCheck!['date']).toEqual(null)
        expect(borrowResult.body.message).toEqual("Book successfully updated.");
    })

    it("borrow book fake cardmember id", async () => {
        const borrowingUsers = await request(app).get("/api/list");
        const bookCollection = await request(app).get("/api/books");
        const borrowResult = await request(app).put(`/api/books/${bookCollection.body[0]._id}`).send(
            {
            user_id: "gaytan"
        }
        ).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const bookCollection2 = await getCollection('books', clientMongo);
        const bookResultToCheck: Document | null = await bookCollection2.findOne();

        expect(borrowResult.statusCode).toEqual(400);
        expect(bookResultToCheck!['user_id']).toEqual(null)
        expect(borrowResult.body.message).toEqual("Invalid member card");
    })

    it("borrow fake book", async () => {
        const borrowingUsers = await request(app).get("/api/list");
        const bookCollection = await request(app).get("/api/books");
        const borrowResult = await request(app).put(`/api/books/63e4f22ac5c550de4aac8f59`).send(
            {
            user_id: borrowingUsers.body[0].code
        }
        ).set('Content-Type', 'application/json').set('Accept', 'application/json');

        expect(borrowResult.statusCode).toEqual(500);
        expect(borrowResult.body.message).toEqual("Could not update");
    })
});

afterAll(async () => {
    await mongoose.connections[0].db.dropCollection('spots');
    await mongoose.connections[0].db.dropCollection('books');
    await mongoose.disconnect()
    await clientMongo.close();
})

/**
 * 
 * @param coll 
 * @param client 
 * @returns 
 */
async function getCollection(coll: string, client: MongoClient): Promise<Collection> {
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(coll)
    return collection;
}