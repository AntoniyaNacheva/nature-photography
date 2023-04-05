import { useState } from 'react';
import axios from 'axios';
import { getUserId } from '../hooks/getUserId';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const CreatePhotography = () => {
	const userID = getUserId();
	const [cookies, _] = useCookies(['access_token']);

	const [photography, setPhotography] = useState({
		name: '',
		imageUrl: '',
		destination: '',
		subject: '',
		style: '',
		typeOfCamera: '',
		userOwner: userID
	});

	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setPhotography({ ...photography, [name]: value });
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post('http://localhost:3001/photographs', photography,
			{ headers: { authorization: cookies.access_token } });
			alert('Photography created!');
			navigate('/');

		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="create-photography">
			<h2> Create Photography </h2>
			<form onSubmit={onSubmit}>
				<label htmlFor="name"> Name </label>
				<input type="text" id="name" name="name" onChange={handleChange} />
				<label htmlFor="imageUrl"> Image URL </label>
				<input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} />
				<label htmlFor="destination"> Destination </label>
				<input type="text" id="destination" name="destination" onChange={handleChange} />
				<label htmlFor="subject"> Subject </label>
				<input type="text" id="subject" name="subject" onChange={handleChange} />
				<label htmlFor="style"> Style </label>
				<input type="text" id="style" name="style" onChange={handleChange} />
				<label htmlFor="typeOfCamera"> Type of camera </label>
				<input type="text" id="typeOfCamera" name="typeOfCamera" onChange={handleChange} />
				<button type="submit"> Create </button>
			</form>
		</div>
	);
};

// imageUrl
// destination
// subject
// style
// typeOfCamera


// Miracle
// https://dailywildlifephoto.nathab.com/photography-guide/wp-content/uploads/2015/11/Bryce-Canyon-manzanita-bush.jpg
// USA
// Bryce Canyon
// Landscape Photography
// DSLR camera