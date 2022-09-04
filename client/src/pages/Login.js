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
          <input
            placeholder="youremail@email.com"
            name="email"
            type="email"
            id="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="pt-3">
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            className="form-control"
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

    <hr className='blank'>
    </hr>

    <hr className='break'>
    </hr>

    <hr className='blank'>
    </hr>

  </div>
  );
}

export default Login;