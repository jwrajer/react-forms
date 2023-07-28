import { useState } from "react"

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null)

  const authenticateToken = async() => {
    try {
      const response = await fetch (`https://fsa-jwt-practice.herokuapp.com/authenticate`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setSuccessMessage(data.message);
      console.log(data);
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
    <h2></h2>
    { error && <p>{error}</p>}
    {successMessage && <h2>{successMessage}</h2>}
    <button onClick= {authenticateToken}>Authenticate</button>
    </>
  )
}

export default Authenticate