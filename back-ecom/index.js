const express = require('express')
const db = require('./data/connect')
const userRouter = require('./router/user')
const productRouter = require('./router/product')
const cors = require('cors')


db.connect()
const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)


app.listen(3000)