import './App.css';
// import Route and Routes
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';

// You need to have <Routes></Routes> (this is plural because it wraps all of the routes) 
// around all <Route/>  (this is singular because it is describing a specific instance of a route)
// <Route /> has to have the path - which tells us what we are going to look for in the address bar
//    and the element - which tells us which page or component to load

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/currencies' element={<Currencies/>} />
        <Route path='/price/:symbol' element={<Price/>}/>
      </Routes>


    </div>
  )
}

export default App