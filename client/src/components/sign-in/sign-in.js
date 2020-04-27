import React, { useState } from 'react';
import './sign-in.scss';
import { connect } from 'react-redux';
import { FormInput } from '../form-input/form-input.component';
import StyleButton from '../styled-button/styled-button.component';

import * as userAction from '../../redux/user/user.action';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log('asdfasf', googleSignInStart);

  const submitSignIn = async (event) => {
    event.preventDefault();
    emailSignInStart({ email, password });
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     setEmail('');
  //     setPassword('');
  //   } catch (error) {
  //     console.error(error);
  //   }
  };

  return (
    <div className="sign-in">
      <div className="title">
        <h2> Already Have An Account?</h2>
        <span>Sign In with your email</span>

      </div>

      <form onSubmit={submitSignIn}>
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
        <div className="buttons">
          <StyleButton type="submit"> Sign In </StyleButton>
          <StyleButton type="button" onClick={googleSignInStart} color="google blue"> Sign In with Google </StyleButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(userAction.googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(userAction.emailSignInStart(email, password)),
});
export default connect(null, mapDispatchToProps)(SignIn);
