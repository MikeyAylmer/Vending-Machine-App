import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Candy from './Candy';
import Chips from './Chips';
import Cookies from './Cookies';
import NavBar from './NavBar';

const App = () => {
  return (
    <main className='App'>
      <BrowserRouter>

        <Link to='/'>Home</Link>

        <Routes>
          <Route path='/' element={<HomeWrapper />} />
          <Route path='/candy' element={<Candy />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/cookies' element={<Cookies />} />

        </Routes>

        <NavBar />

      </BrowserRouter>
    </main>
  )
}

const HomeWrapper = () => {
  return <React.Fragment><Home /></React.Fragment>;
};

export default App;
