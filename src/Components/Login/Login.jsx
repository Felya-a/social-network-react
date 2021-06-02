import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { loginThunkCreator, logoutProfile } from '../../redux/authReduser';
import { connect } from 'react-redux';
import stylesError from "../common/FormsControls/FormsControls.module.css"
import styles from "./Login.module.css"
import { Redirect } from 'react-router';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.formLogin}>
      <span>641027B@gmail.com</span>
      <div>
        <Field
          type="text"
          placeholder="Email"
          component={Input}
          name='email'
          validate={[required]} />
      </div>
      <div>
        <Field
          type="text"
          placeholder="Password"
          component={Input}
          name='password'
          validate={[required]} />
      </div>
      <div>
        <Field
          type="checkbox"
          component={Input}
          name='rememberMe' /> remember me
      </div>
      {props.error &&
        <div className={stylesError.formSummatyError}>
          {props.error}
        </div>
      }
      {props.urlCaptcha &&
        < div className={styles.error__captcha}>
          <img src={props.urlCaptcha} alt="Captcha" />
          <Field
            type="text"
            component={Input}
            name="captchaText"
          validate={[required]}
          />
        </div>
      }

      <button>Sign up</button>
      <button onClick={props.reset} type='button'>Reset</button>
    </form >
  )
}

const LoginReduxForm = reduxForm({
  form: "login" // что то типа идентификатора для формы (не относится ни к html ни к полю в store)
})(LoginForm)

let Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCreator(formData);
  }
  const logout = () => {
    props.logoutProfile();
  }

  return (
    < div >
      <h1>Login</h1>
      {props.isAuth ?
        <button onClick={logout} type='button' >Logout</button> :
        <LoginReduxForm onSubmit={onSubmit} urlCaptcha={props.urlCaptcha} />
      }
    </div >
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  urlCaptcha: state.auth.urlCaptcha,
})
export default connect(mapStateToProps, { loginThunkCreator, logoutProfile })(Login);