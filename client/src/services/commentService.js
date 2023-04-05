import * as request from './requestService';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (photographyId, comment) =>
	request.post(baseUrl, { photographyId, text: comment });

export const getByPhotographyId = (photographyId) => {
	const relations = encodeURIComponent('user=_ownerId:users');
	const search = encodeURIComponent(`photographyId="${photographyId}"`);

	return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};

