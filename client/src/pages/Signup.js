import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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

      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="pt-3">
          <input
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="pt-3">
          <input
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            className="form-control"
            onChange={handleChange}
          />
        </div>
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

export default Signup;