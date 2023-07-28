import { useState, useEffect } from 'react'

const SignUpForm = ({ setToken }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      setToken(data.token);
      setSuccessMessage(data.message);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      { error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Username'
          value={username} 
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input 
          placeholder='Password'
          value={password} 
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button> Submit </button>
      </form>
      { successMessage && <h3>{successMessage}</h3>}
    </>
  )
}

export default SignUpForm