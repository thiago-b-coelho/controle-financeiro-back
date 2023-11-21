const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { save, getByEmail } = require('../user/user.model.js')

const login = async (params) => {
  const user = await getByEmail(params.email);
  if (!user) {
    return { error: 'Invalid e-mail or password.' }
  }
  const password = bcrypt.compareSync(params.password, user.password);
  if (!password) {
    return { error: 'Invalid e-mail or password.' }
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return { token };
}

const register = async (params) => {
  const user = await getByEmail(params.email);
  if (user) {
    return { error: 'User already registered.' }
  }
  const newUser = await save(params);
  const token = jwt.sign({ id: newUser[0] }, process.env.JWT_SECRET);
  return { token };
}

module.exports = { login, register }