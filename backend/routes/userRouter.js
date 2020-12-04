const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

router.post('/register', async (req, res) => {
  try {
    const { email, password, passwordCheck, displayName } = req.body

    // validation

    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: 'Not all field have been entered' })
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: 'Password must be five characters long' })
    if (password !== passwordCheck)
      return res.status(400).json({ msg: 'Passwords do not match' })

    const existingUser = await User.findOne({ email: email })
    if (existingUser)
      return res
        .status(400)
        .json({ msg: 'An account with this email already exists.' })

    if (!displayName) displayName = email

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    })
    const savedUser = newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
