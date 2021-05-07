module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.username === 'aaron' && req.body.password === '111') {
      return res.status(200).json({
        user: {
          token: 'awepfojwaeogiqw4g'
        }
      })
    } else {
      return res.status(400).json({
        message: 'Username or password is not correct'
      })
    }
  }

  next()
}
