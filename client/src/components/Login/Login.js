import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        if (!email || !password) {
            return window.alert('The fields are required!');
        }

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch((error) => {
                 console.log(error);
            });
    };

    return (
        <section className='loginContainer'>
            <div className="register-page">
                <form id="login" onSubmit={onSubmit}>
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='E-Mail'
                        />
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" placeholder='Password' />
                        <input type="submit" className="btn submit" value="Login" />
                        <p className="field">
                            <span>
                                <Link to="/register">Go to Register page.</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
