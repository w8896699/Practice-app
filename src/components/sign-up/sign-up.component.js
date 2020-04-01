/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import './sign-up.style.scss';

import { FormInput } from '../form-input/form-input.component';
import StyleButton from '../styled-button/styled-button.component';
import { auth, createUserProfileDocument } from '../../firebase/filrebase.util';

export const SignUp = () => {
//   console.log('hahia');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password Doesn\'t Match');
    } else if ((password.length) < 6) {
      alert('Password has to longer that 6 character');
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName }); // wait untill this process finished and reset all state
    } catch (error) {
      // Handle Errors here.
      // eslint-disable-next-line no-console
      console.error(error);
      // ...
    }
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="sign-up">
      <div className="title">
        <h2> Do not have Account Yet ?</h2>
        <span>Sign up with email now!</span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="DISPLAY NAME"
          value={displayName}
          handleChange={(event) => setDisplayName(event.target.value)}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="EMAIL"
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="PASSWORD"
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Your Password"
          value={confirmPassword}
          handleChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <div className="buttons">
          <StyleButton type="submit"> Sign Up Now! </StyleButton>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
