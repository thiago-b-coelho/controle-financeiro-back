const knex = require('../../config/database.js');
const bcrypt = require('bcrypt');

const getAll = () => {
  return knex('users').select('id', 'name', 'email', 'created_at', 'updated_at');
}

const get = (id) => {
  return knex('users').where({ id }).first().select('id', 'name', 'email', 'created_at', 'updated_at');
}

const getByEmail = (email) =>{
  return knex('users').where({email}).first();
}

const save = (params) => {
  params.password = bcrypt.hashSync(params.password, 10)
  return knex('users').insert(params)
}

const remove = (id) => {
  return knex('users').delete(id)
}

const update = (id, params) => {
  return knex('users').where({ id }).update(params)
}

module.exports = { getAll, get, getByEmail, save, remove, update }