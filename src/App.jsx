import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

  axios.get(URL).then((response) => {
    console.log(response);
  })

  return (
    <>
      <h1>JOKERAPI</h1>
      <h2>{URL}</h2>
    </>
  )
}

export default App
