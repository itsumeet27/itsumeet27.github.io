import HeaderSection from './shared/HeaderSection'
import FooterBar from './shared/FooterSection'
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>          
        <HeaderSection />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
