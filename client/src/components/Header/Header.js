import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    Nature Photography
                </Link>
            </h1>
            <nav>
                {user.email && <span>{user.email}</span>}
                <Link to="/allPhotographs">All Photographs</Link>
                {user.email
                    ? <div id="user">
                        <Link to="/create">Create Photography</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Header;
