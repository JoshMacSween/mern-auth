const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

//Express Setup
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})

//MongoDB Setup
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err
    console.log('MongoDB connection established')
  }
)

// Routes Setup
app.use('/users', require('./routes/userRouter'))
