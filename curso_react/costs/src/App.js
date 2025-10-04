import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass='min_height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Company' element={<Company />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/NewProject' element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
