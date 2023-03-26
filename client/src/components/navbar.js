import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/create-photography">Create Photography</Link>
			<Link to="/saved-photographs">Saved Photographs</Link>
			<Link to="/auth">Login/Register</Link>
		</div>
	);
};