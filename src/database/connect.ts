import mongoose from 'mongoose'
import { Book } from './models';
import { Spot } from './models';
import 'dotenv/config'
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ID}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`

export async function databaseConnection() {
    mongoose.set('strictQuery', true)
    // console.log(uri)
    await mongoose.connect(uri);

    const book1 = {
        name: "How to rekt TBOI: 101",
        author: "Gaetan le Malandrin",
        date: null,
        user_id: null,
        spot_id: '63e4ed537d91ea19bcc06259',
    }
    const book2 = {
        name: "Book2",
        author: "Gaetan le Malandrin",
        date: null,
        user_id: null,
        spot_id: '63e4ed537d91ea19bcc06259',
    }
    const book3 = {
        name: "Book3",
        author: "Ghedeon le Malandron",
        date: new Date(),
        user_id: '343DJIE',
        spot_id: '63e4ed95a4783b73dae3faf1',
    }

    // const newSpot = new Spot({
    //     address: '9 rue du régiment de la chaudière'
    // })
    // newSpot.save()

    // Book.insertMany([book1, book2, book3])
}