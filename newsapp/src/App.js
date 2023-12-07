
import React,{useState} from 'react'
import Navbar from './Components/NavBar';
import NewsApp from './Components/NewsApp';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

const App = () => {
    return (
      <>
      <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<NewsApp key="general" pageSize={5} category = "general"/>} />
      <Route exact path="/Business" element={<NewsApp key="Business" pageSize={5} category = "Business"/>}></Route>
      <Route exact path="/Sports" element={<NewsApp key="Sports" pageSize={5} category = "Sports"/>}></Route>
      <Route exact path="/Entertainment" element={<NewsApp key="Entertainment" pageSize={5} category = "Entertainment"/>}></Route>
      <Route exact path="/Technology" element={<NewsApp key="Technology" pageSize={5} category = "Technology"/>}></Route>
      <Route exact path="/Health" element={<NewsApp key="Health" pageSize={5} category = "Health"/>}></Route>
      </Routes>
      </Router>
      </>
    )
}

export default App

