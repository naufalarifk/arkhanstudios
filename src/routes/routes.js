import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import About from '../pages/about/About';
import Career from '../pages/about/Career';
import Clients from '../pages/about/Clients';
import Faq from '../pages/about/Faq';
import Services from '../pages/about/Services';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';

import Home from '../pages/home/Home';
import Kawai from '../pages/portfolio/Kawai';
import Mascot from '../pages/portfolio/Mascot';
import Tee from '../pages/portfolio/Tee';
const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>  
          <Route exact path='/mascot-design' element={<Mascot/>}/>
          <Route exact path='/tee-design' element={<Tee/>}/>
          <Route exact path='/kawai-design' element={<Kawai/>}/>
          <Route exact path='/blogs' element={<Blog/>}/>  
          <Route exact path='/contact' element={<Contact/>}/>  
          <Route exact path='/about' element={<About/>}/>  
          <Route exact path='/career' element={<Career/>}/>  
          <Route exact path='/clients' element={<Clients/>}/>
          <Route exact path='/faq' element={<Faq/>}/>  
          <Route exact path='/services' element={<Services/>}/>  
        </Routes>
    </Router>
  )
}

export default Routing