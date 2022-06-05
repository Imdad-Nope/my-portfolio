import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact';
import NavBar from './Pages/Home/NavBar/NavBar';
import Service from './Pages/Service/Service';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/navbar' element={<NavBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
