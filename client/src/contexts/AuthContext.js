import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({
	children
}) => {
	const [auth, setAuth] = useLocalStorage('auth', {});

	const userLogin = (authData) => {
		setAuth(authData);
	};

	const userLogout = () => {
		setAuth({});
	};

	return (
		<AuthContext.Provider value={{
			user: auth,
			userLogin,
			userLogout,
			isAuthenticated: !!auth.accessToken
		}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	return context;

};

// With Higher-Order Component
export const withAuth = (Component) => {
	const AuthDecorator = (props) => {
		const context = useContext(AuthContext);
		return <Component {...props} auth={context} />;
	};

	return AuthDecorator;
};
