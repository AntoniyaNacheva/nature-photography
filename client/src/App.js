import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PhotographyProvider } from './contexts/PhotographyContext';

import PrivateRoute from './components/Guards/PrivateRoute';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import CreatePhotography from './components/CreatePhotography/CreatePhotography';
import EditPhotography from './components/EditPhotography/EditPhotography';
import AllPhotographs from './components/AllPhotographs/AllPhotographs';
import PhotographyDetails from './components/PhotographyDetails/PhotographyDetails';
import Footer from './components/Footer/Footer';

const Register = lazy(() => import('./components/Register/Register'));

function App() {

    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <PhotographyProvider >
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={
                                <Suspense fallback={<span>Loading....</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/create" element={<PrivateRoute><CreatePhotography /></PrivateRoute>} />
                            <Route path="/photographs/:photographyId/edit" element={<EditPhotography />} />
                            <Route path="/allPhotographs" element={<AllPhotographs />} />
                            <Route path="/allPhotographs/:photographyId" element={<PhotographyDetails />} />
                        </Routes>
                    </main>
                </PhotographyProvider>

                <Footer />
            </div>
        </AuthProvider>
    );
};

export default App;
