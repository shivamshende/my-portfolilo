import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import About from './components/About/About';
import NonTechBLogs from './components/Blog/Non-TechBLogs';
import TechBlogs from './components/Blog/TechBlogs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='blog' element={<Blog />} >
                    <Route index element={<Navigate to="non-techBlogs" replace />} />
                    <Route path='non-techBlogs' element={<NonTechBLogs />} />
                    <Route path='techBlogs' element={<TechBlogs />} />
                </Route>
                <Route path='resume' element={<Resume />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
            </Routes>
        </Router>
    )
}

export default App