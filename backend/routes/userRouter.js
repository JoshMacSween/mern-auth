const router = require('express').Router()
const User = require('../models/userModel')

router.post('/register', async (req, res) => {
  try {
    const { email, password, passwordCheck, displayName } = req.body

    // validation

    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: 'Not all field have been entereds' })
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: 'Password must be five characters long' })
    if (password !== passwordCheck)
      return res.status(400).json({ msg: 'Passwords do not match' })

    const existingUser = await User.find({ email: email })
    if (existingUser)
      return res
        .status(400)
        .json({ msg: 'An account with this email already exists.' })

    if (!displayName) displayName = email
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
