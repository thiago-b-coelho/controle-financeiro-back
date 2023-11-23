
const getMe = async (token) => {
const jwt = require('jsonwebtoken');
  try {
    const isValid = jwt.verify(token, process.env.JWT_SECRET)
    return isValid;
  } catch (error) {
    return { error: 'invalid token' }
  }
}

module.exports = getMe;