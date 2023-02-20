import { Response, Request } from 'express'
import { databaseConnection } from './src/database/connect'
import { cronFunction } from './app'
import app from './app'

const port = process.env.PORT
app.listen(port, async () => {
    console.log(`Listening to port ${port}...`)
    cronFunction()
    await databaseConnection().catch(err => console.log(err));
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})