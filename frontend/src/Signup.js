import React, { Component } from 'react';

import './App.css';

class SignupForm extends Component {
  render() {
    return (
      <div className="signup-form">
        <h1>Voicemail Handler</h1>
        {signupForm()}
      </div>
    );
  }
}

function signupForm() {
  return (
    <form onSubmit={handleSignup}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Clinic Name:
        <input type="text" name="clinic_name" />
      </label>
      <br />
      <label>
        Clinic Email:
        <input type="email" name="clinic_email" />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
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