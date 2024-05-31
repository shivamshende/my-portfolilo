import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import About from './components/About/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='blog' element={<Blog />} />
                <Route path='resume' element={<Resume />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
            </Routes>
        </Router>
    )
}

export default App
