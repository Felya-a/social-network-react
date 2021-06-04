import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { loginThunkCreator, logoutProfile } from '../../redux/authReduser';
import { connect } from 'react-redux';
import "../common/FormsControls/FormsControls.scss"
import "./Login.scss"
// import "./buttion.scss"


const LoginForm = (props) => {
  console.log(props.error);
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <div className="form__input_email input">
        <Field
          type="text"
          placeholder="Email"
          component={Input}
          name='email'
          validate={[required]} />
      </div>
      <div className='form__input_password input'>
        <Field
          type="text"
          placeholder="Password"
          component={Input}
          name='password'
          validate={[required]} />
      </div>
      <div className='form__checkbox_rememberme'>
        <Field
          type="checkbox"
          component={Input}
          name='rememberMe'
          id='rememberMe' />
      </div>
      <label htmlFor="rememberMe" className='form__input_text'>
        Remember me
      </label>
      <div className="error">
        {props.error &&
          <div className="error__message">
            <div>{props.error}</div>
          </div>
        }
        {props.urlCaptcha &&
          < div className="error__captcha">
            <img src={props.urlCaptcha} alt="Captcha" className='error__captcha_img' />
            <Field
              className='error__captcha_input'
              type="text"
              component={Input}
              placeholder="Captcha"
              name="captchaText"
              validate={[required]}
            />
          </div>
        }
      </div>

      <button className='form__btnlogin btn'>Login</button>
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
    <div className='login'>
      <div className='login__content'>
        <h3 className='login__title'>LOGIN</h3>
        {props.isAuth ?
          <button onClick={logout} type='button' className='login__button_auth btn'>Logout</button> :
          <LoginReduxForm onSubmit={onSubmit} urlCaptcha={props.urlCaptcha} />
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  urlCaptcha: state.auth.urlCaptcha,
})
export default connect(mapStateToProps, { loginThunkCreator, logoutProfile })(Login);