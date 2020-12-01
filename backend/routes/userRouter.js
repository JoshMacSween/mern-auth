const router = require('express').Router()

router.post('/register', async (req, res) => {
  const { email, password, passwordCheck, displayName } = req.body

  // validation

  if (!email || !password || !passwordCheck)
    return res.status(400).json({ msg: 'Not all field have been entereds' })
  if (password.length < 5)
    return res
      .status(400)
      .json({ msg: 'Password must be five characters long' })
  if (password !== passwordCheck)
    return res.status(400).json({msg: "Passwords do not match"})
})

module.exports = router
