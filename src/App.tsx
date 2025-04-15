import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './client/dashboard/form'
import React from 'react'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
    </>
  )
}

export default App
