import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
  <div>
    <div className="manyForms">

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="pt-3">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="pt-3">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">Incorrect credentials.</p>
          </div>
        ) : null}
        <div className="pt-3">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>

    <div className='blank'>
      <h1></h1>
    </div>

  </div>
  );
}

export default Login;