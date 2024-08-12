import * as express from 'express'
import { commonRouter } from "./router"
import * as cors from 'cors'
import { errorMw } from '@/config'
import * as bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api', commonRouter)

app.use(errorMw)



app.listen('888', () => {
	console.log("server is running at http://localhost:888")
})