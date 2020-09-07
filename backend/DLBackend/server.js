require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.error(error.message))


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const boxesRouter = require('./routes/boxes')
app.use(cors())
app.use('/boxes', boxesRouter)

app.listen(9000, () => console.log('Server Started'))