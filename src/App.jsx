import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from "./components/Top";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cartagena from "./components/Cartagena"

import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Top />
      <Nav />
      <div className='cards-container'>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/article/:id" element={<Location />} />
        </Routes>    
      </div>
    </>
  )
}

export default App
