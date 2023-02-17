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
        const result = await request(app).post("/api/spots").send({ "address": "La cabane à bouc" }).set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        const collection = await getCollection('spots', clientMongo);
        const resultToCheck: Document | null = await collection.findOne();

        expect(resultToCheck!['address']).toEqual("La cabane à bouc")
        expect(result.body.address).toEqual("La cabane à bouc");
        expect(result.statusCode).toEqual(200);
    });


    it("set an already existing spot", async () => {
        const result = await request(app).post("/api/spots")
            .send({ "address": "La cabane à bouc" })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(result.statusCode).toEqual(500);

    });
});

describe("GET / - retrieve list of spots", () => {
    it("get list of spots", async () => {
        const result = await request(app).get("/api/spots");

        const collection = await getCollection('spots', clientMongo);
        const resultToCheck: Document | null = await collection.findOne();

        expect(resultToCheck!['address']).toEqual("La cabane à bouc")
        expect(result.body[0].address).toEqual("La cabane à bouc");
        expect(result.statusCode).toEqual(200);
    });
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