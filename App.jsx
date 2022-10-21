
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Read from './components/pages/Read';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
