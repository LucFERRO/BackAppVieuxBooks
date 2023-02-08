const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ID}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`

export async function databaseConnection() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri);
    
    const Psyduck = mongoose.model('Psyduck', { name: String });
    // const duck = new Psyduck({ name: 'Gaetan2' });
    // duck.save().then(() => console.log('psychooo'));
}