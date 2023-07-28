import { useState, useEffect } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    console.log(token);
  },[token]);

  return (
    <>
      <SignUpForm setToken= {setToken}/>
      <Authenticate token= {token}/>
    </>
  )
}

export default App
