import * as request from './requestService';

const baseUrl = 'http://localhost:3030/data/photographs';

export const getAll = () => request.get(baseUrl);

export const getOne = (photographyId) => request.get(`${baseUrl}/${photographyId}`);

export const create = (photographyData) => request.post(baseUrl, photographyData);

export const edit = (photographyId, photographyData) => request.put(`${baseUrl}/${photographyId}`, photographyData);

export const remove = (photographyId) => request.del(`${baseUrl}/${photographyId}`);
