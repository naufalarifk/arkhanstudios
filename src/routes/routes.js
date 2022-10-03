import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';

import Home from '../pages/home/Home';
import Portfolio from '../pages/portfolio/Portfolio';
const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>  
          <Route exact path='/portfolio' element={<Portfolio/>}/>  
          <Route exact path='/blogs' element={<Blog/>}/>  
          <Route exact path='/contact' element={<Contact/>}/>  
          <Route exact path='/about' element={<About/>}/>  
        </Routes>
    </Router>
  )
}

export default Routing