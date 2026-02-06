import React, { Component } from 'react';

import './App.css';

class SignupForm extends Component {
  render() {
    return (
      <div className="signup-form">
        <h2 className="signup-title">Register your practice</h2>
        {signupForm()}
      </div>
    );
  }
}

function signupForm() {
  return (
    <form onSubmit={handleSignup}>
      <div className="form-group-name">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <br />
      <div className='form-group-grid'>
        <div className="form-group">
          <label htmlFor="clinic_name">
            Clinic Name:
            <input type="text" name="clinic_name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="clinic_email">
            Clinic Email:
            <input type="email" name="clinic_email" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="username">
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input type="password" name="password" />
          </label>
        </div>
      </div>
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

function handleSignup(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    name: form.name.value,
    clinic_name: form.clinic_name.value,
    clinic_email: form.clinic_email.value,
    username: form.username.value,
    password: form.password.value,
  };

  fetch('http://127.0.0.1:8000/heidicalls/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(respData => {
      console.log('Success:', respData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default SignupForm;