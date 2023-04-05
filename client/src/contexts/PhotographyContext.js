import { createContext, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as photographyService from '../services/photographyService';

export const PhotographyContext = createContext();

const photographyReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_PHOTOGRAPHS':
			return action.payload.map(x => ({ ...x, comments: [] }));
		case 'ADD_PHOTOGRAPHY':
			return [...state, action.payload];
		case 'EDIT_PHOTOGRAPHY':
		case 'FETCH_GAME_DETAILS':
			return state.map(x => x._id === action.photographyId ? action.payload : x);
		case 'ADD_COMMENT':
			return state.map(x => x._id === action.photographyId ?
				{ ...x, comments: [...x.comments, action.payload] } : x);
		case 'REMOVE_PHOTOGRAPHY':
			return state.filter(x => x._id !== action.photographyId);
		default:
			return state;
	}
};

export const PhotographyProvider = ({
	children
}) => {
	const navigate = useNavigate();
	const [photographs, dispatch] = useReducer(photographyReducer, []);

	useEffect(() => {
		photographyService.getAll()
			.then(result => {
				const action = {
					type: 'ADD_PHOTOGRAPHS',
					payload: result
				};
				dispatch(action);
			});
	}, []);

	const selectPhotography = (photographyId) => {
		return photographs.find(x => x._id === photographyId) || {};
	};

	const fetchPhotographyDetails = (photographyId, photographyDetails) => {
		dispatch({
			type: 'FETCH_GAME_DETAILS',
			payload: photographyDetails,
			photographyId
		});
	};

	const addComment = (photographyId, comment) => {
		dispatch({
			type: 'ADD_COMMENT',
			payload: comment,
			photographyId
		});
	};

	const photographyAdd = (photographyData) => {
		dispatch({
			type: 'ADD_PHOTOGRAPHY',
			payload: photographyData
		});

		navigate('/allPhotographs');
	};

	const photographyEdit = (photographyId, photographyData) => {
		dispatch({
			type: 'EDIT_PHOTOGRAPHY',
			payload: photographyData,
			photographyId
		});
	};

	const photographyRemove = (photographyId) => {
		dispatch({
			type: 'REMOVE_PHOTOGRAPHY',
			photographyId
		});
	};

	return (
		<PhotographyContext.Provider value={{
			photographs,
			photographyAdd,
			photographyEdit,
			addComment,
			fetchPhotographyDetails,
			selectPhotography,
			photographyRemove
		}} >
			{children}
		</PhotographyContext.Provider>
	);
};


