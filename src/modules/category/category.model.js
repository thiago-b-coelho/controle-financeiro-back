const knex = require('../../config/database.js');

const TABLE = 'categories'

const getAll = (userID) => {
  return knex(TABLE).select('*').where({ 'user_id': userID });
}

const get = (id, userID) => {
  return knex(TABLE).where({ id }).andWhere({ 'user_id': userID }).select('*').first();
}

const save = (params) => {
  return knex(TABLE).insert(params);
}

const remove = (id, userID) => {
  return knex(TABLE).delete(id).where({ id }).andWhere({ 'user_id': userID });
}

const update = (id, userID, params) => {
  return knex(TABLE).where({ id }).andWhere({ 'user_id': userID }).update(params);
}

module.exports = { getAll, get, getByEmail, save, remove, update }