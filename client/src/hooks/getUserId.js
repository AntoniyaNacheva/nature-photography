export const getUserId = () => {
	return window.localStorage.getItem('userID');
};

export const getOwnerId = () => {
	return window.localStorage.getItem('userOwnerID');
};

export const getPhotographyId = () => {
	return window.localStorage.getItem('photographyID');
}