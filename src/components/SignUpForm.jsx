import { useState, useEffect } from 'react'

const SignUpForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log(username);
  },[username])

  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <input value={username} onChange={(event) => setUsername(event.target.value)}></input>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button> Submit </button>
      </form>
    </>
  )
}

export default SignUpForm