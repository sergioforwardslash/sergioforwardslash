import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, Experience, Work, Contact } from './pages'
import { Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App