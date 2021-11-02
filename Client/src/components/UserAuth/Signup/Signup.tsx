import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { HTMLHandlers } from '../LoginPage/molecules/Login';

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>('');
  const routePaths = useHistory();

  const handleSignup = () => {
    alert("Welcome!");
  };

  return (
    <div className='Signup'>
      <h1>Create Account</h1>
      {error && <div className='error-message'> { error }</div> }
      <input
        type="text"
        value={email}
        onChange={(ev:HTMLHandlers)=> setEmail(ev.target.value) }
        placeholder="example@email.com"
      />
      <input
        type="password"
        value={password}
        onChange={(ev: HTMLHandlers)=> setPassword(ev.target.value)}
        placeholder="create something unique..."
      />

      <button disabled={!email || !password} onClick={handleSignup}>
        Signup
      </button>

      <button onClick={() => routePaths.push('/') }>
        {" "}
        Already have an account? Login{" "}
      </button>

    </div>
  )
}

export default Signup
