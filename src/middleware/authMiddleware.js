const jwt = require('jsonwebtoken');
const { get } = require('../modules/user/user.model.js')

const authMiddleware = async (req, res, next) => {
  try {
    const {id} = jwt.verify(req.token, process.env.JWT_SECRET)
    const user = await get(id)
    req.user = user
    next();
  } catch (error) {
    return res.status(403).json({ message: 'invalid token!' })
  }

}

module.exports = authMiddleware;