import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import  pageNotFound from './components/pageNotFound/pageNotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="app">

      <Router>
        <div className=''></div>
        <Header/>
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/movie/:imdbID" element={<MovieDetail/>}/>
          <Route Component={pageNotFound}/> 
        </Routes>
        </div> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
