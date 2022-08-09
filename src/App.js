
import './App.css';
import './components/login/Login.css'
import { Routes, Route } from 'react-router-dom'

// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';

import { Header} from './components/header/Header';
import { Home } from './components/home/Home';
import { Cars } from './components/cars/Cars';
import { Login } from './components/login/Login';




const PARSE_APPLICATION_ID = '9nTwJRLz0Ksu1AR8mNWuEfQylbUeJp3ccmqLvzIM';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'DSR96IE9jJprksIIHFRRES8viMQvj0KprIW89ZMC';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}></Route>
        
      
        </Routes>
     
      <Cars/>
    </div>
  );
}

export default App;
