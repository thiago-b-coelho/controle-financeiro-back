const knex = require('../../services/knex');
const bcrypt = require('bcrypt');

const TABLE = 'users';

const getAll = () => {
  return knex(TABLE).select('id', 'name', 'email', 'created_at', 'updated_at');
}

const get = (id) => {
  return knex(TABLE).where({ id }).first().select('id', 'name', 'email', 'created_at', 'updated_at');
}

const getByEmail = async (email) => {
  try {
    const result = await knex(TABLE).where({ email }).first();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const save = (params) => {
  params.password = bcrypt.hashSync(params.password, 10)
  return knex(TABLE).insert(params)
}

const remove = (id) => {
  return knex(TABLE).delete(id)
}

const update = (id, params) => {
  return knex(TABLE).where({ id }).update(params)
}

module.exports = { getAll, get, getByEmail, save, remove, update }