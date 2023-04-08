import { useNavigate, Link } from 'react-router-dom';

import * as authService from '../../services/authService';
import { withAuth } from '../../contexts/AuthContext';


const Register = ({ auth }) => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            });
    };

    return (
        <section className='loginContainer'>
            <div className="register-page">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" placeholder='Password' />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Password'/>
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>
                            <Link to="/login">Go to Login page.</Link>
                        </span>
                    </p>
                </div>
            </form>
            </div>
        </section>
    );
};

const RegisterWithAuth = withAuth(Register);

export default RegisterWithAuth;
