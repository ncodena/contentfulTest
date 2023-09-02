import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from "./components/Top";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top />
      <Nav />
      <Header />
    </>
  )
}

export default App
