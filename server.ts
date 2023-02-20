import { Response, Request } from 'express'
import { databaseConnection } from './src/database/connect'
import { CronFunction } from './app'
import app from './app'

CronFunction()

const port = process.env.PORT
app.listen(port, async () => {
    console.log(`Listening to port ${port}...`)
    await databaseConnection().catch(err => console.log(err));
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})