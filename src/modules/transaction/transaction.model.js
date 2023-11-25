const knex = require('../../services/knex');

const TABLE = 'transactions'

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
  return knex(TABLE).delete().where({ id }).andWhere({ 'user_id': userID });
}

const update = (id, userID, params) => {
  const result = knex(TABLE).where({ id }).andWhere({ 'user_id': userID }).update(params).catch((err) => {
    throw new Error(err.sqlMessage);
  });
  return result;
}

module.exports = { getAll, get, save, remove, update }