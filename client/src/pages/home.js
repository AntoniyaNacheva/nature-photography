import React, { useEffect, useState } from 'react';
import { getUserId } from '../hooks/getUserId';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export const Home = () => {
	const [photographs, setPhotographs] = useState([]);
	const [savedPhotographs, setSavedPhotographs] = useState([]);
	const [cookies, _] = useCookies(['access_token']);

	const userID = getUserId();

	useEffect(() => {
		const fetchPhotography = async () => {
			try {
				const response = await axios.get('http://localhost:3001/photographs');
				setPhotographs(response.data);

			} catch (err) {
				console.log(err);
			}
		};

		const fetchSavedPhotography = async () => {
			try {
				const response = await axios.get(`http://localhost:3001/photographs/savedPhotographs/ids/${userID}`);
				setSavedPhotographs(response.data.savedPhotographs);

			} catch (err) {
				console.log(err);
			}
		};

		fetchPhotography();

		if (cookies.access_token) {
			fetchSavedPhotography();
		}
	}, []);

	const savePhotography = async (photographyID) => {
		try {
			const response = await axios.put('http://localhost:3001/photographs', {
				photographyID,
				userID
			}, { headers: { authorization: cookies.access_token } });
			setSavedPhotographs(response.data.savedPhotographs);

		} catch (err) {
			console.error(err);
		}
	};

	const isPhotographySaved = (id) => savedPhotographs.includes(id);

	return (
		<div>
			<h1> Photographs </h1>
			<ul>
				{photographs.map((photography) => (
					<li key={photography._id}>
						<div>
							<h2>{photography.name}</h2>
							{cookies.access_token ? (
								<button
									onClick={() => savePhotography(photography._id)}
									disabled={isPhotographySaved(photography._id)}>
									{isPhotographySaved(photography._id) ? 'Saved' : 'Save'}
								</button>
							) : null}
						</div>
						<div>
							<p>{photography.subject}</p>
						</div>
						<img src={photography.imageUrl} alt={photography.name} />
						<p> Destination: {photography.destination} </p>
					</li>
				))}
			</ul>
		</div>
	);
};