import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { CreatePhotography } from './pages/createPhotography';
import { SavedPhotographs } from './pages/savedPhotographs';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-photography" element={<CreatePhotography />} />
          <Route path="/saved-photographs" element={<SavedPhotographs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
