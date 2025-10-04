import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
