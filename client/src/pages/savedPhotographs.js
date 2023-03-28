import React, { useEffect, useState } from 'react';
import { getUserId } from '../hooks/getUserId';
import axios from 'axios';

export const SavedPhotographs = () => {
	const [savedPhotographs, setSavedPhotographs] = useState([]);

	const userID = getUserId();

	useEffect(() => {

		const fetchSavedPhotography = async () => {
			try {
				const response = await axios.get(`http://localhost:3001/photographs/savedPhotographs/${userID}`);
				setSavedPhotographs(response.data.savedPhotographs);

			} catch (err) {
				console.log(err);
			}
		};

		fetchSavedPhotography();

	}, []);

	return (
		<div>
			<h1> Saved Photographs </h1>
			<ul>
				{savedPhotographs.map((photography) => (
					<li key={photography._id}>
						<div>
							<h2>{photography.name}</h2>
						</div>
						<div>
							<p>{photography.subject}</p>
						</div>
						<img src={photography.imageUrl} alt={photography.name} />
						<p> Destination: {photography.destination} </p>
						<button> Details </button>
					</li>
				))}
			</ul>
		</div>
	);
};