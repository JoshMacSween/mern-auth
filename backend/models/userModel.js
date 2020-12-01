const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
})

const User = mongoose.model('User', userSchema)

export default User