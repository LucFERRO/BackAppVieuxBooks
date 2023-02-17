import mongoose from 'mongoose'
const { Schema } = mongoose

export const spotSchema = new Schema({
    address: {
        type: String,
        unique: true,
    },
    // createdAt: {
    //     type: Date,
    //     immutable: true,
    //     default: () => Date.now()
    // }
},
    {
        timestamps: true
    }
)

export const Spot = mongoose.model('Spot', spotSchema)

export const bookSchema = new Schema({
    name: String,
    author: String,
    date: Date,
    user_id: String,
    spot_id: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})
export const Book = mongoose.model('Book', bookSchema)