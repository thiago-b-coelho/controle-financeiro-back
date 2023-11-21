import knex from '../../services/knex.js';

export const getAll = () => {
  return knex('users');
}

export const save = (params) => {
  return knex('users').insert(params)
}

export const remove = (params) => {
  return knex('users').delete(params)
}

export const update = (params) => {
  return knex('users').insert(params)
}

