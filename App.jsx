
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Read from './components/pages/Read';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path='/' exact component={Home}/>
        <Route path='/read' component={Read}/>
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
