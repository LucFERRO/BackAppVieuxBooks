import mongoose from 'mongoose'
import { Book } from './models';
import { Spot } from './models';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ID}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`

export async function databaseConnection() {
    mongoose.set('strictQuery', true)
    // console.log(uri)
    await mongoose.connect(uri);

    const book1 = {
        name: "Book1",
        author: "Gaetan le Malandrin",
        state: '',
        spot_id: '63e4ed537d91ea19bcc06259',
    }
    const book2 = {
        name: "Book2",
        author: "Gaetan le Malandrin",
        state: '',
        spot_id: '63e4ed537d91ea19bcc06259',
    }
    const book3 = {
        name: "Book3",
        author: "Ghedeon le Malandron",
        state: Date.now(),
        spot_id: '63e4ed95a4783b73dae3faf1',
    }

    // const newSpot = new Spot({
    //     address: 'Place Dalton'
    // })
    // newSpot.save()

    // Book.insertMany([book1, book2, book3])
}