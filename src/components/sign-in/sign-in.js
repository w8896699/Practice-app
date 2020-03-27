import React, { useState } from 'react';
import './sign-in.scss';
import { FormInput } from '../form-input/form-input.component';
import { StyleButton } from '../styled-button/styled-button.component';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="sign-in">
      <div className="title">
        <h2> Already Have An Account?</h2>
        <span>Sign In with your email</span>

      </div>

      <form onSubmit={() => { setEmail(''); setPassword(''); }}>
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

        <StyleButton type="submit"> Sign In </StyleButton>
      </form>
    </div>
  );
};
export default SignIn;
