import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../../common/FormsControls/FormsControls"
import "./ProfileDataEdit.scss"
import { updateDataProfile } from '../../../../redux/profileReducer';
import "../../../common/FormsControls/FormsControls.scss"


const ProfileForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit} className="profileForm">
      <button className='profileForm__btn btn'>Сохранить</button>
      <button className='profileForm__btn btn' onClick={() => { props.reset(); props.setEditMode() }} type='button' >Отменить</button>
      {props.error &&
        <div className="error">
          <div className='error__message'>{props.error}</div>
        </div>
      }
      <label htmlFor="fullName">Full name: </label>
      <div className="profileForm__item">
        <Field component={Input} name="fullName" id="fullName" />
      </div>
      <label htmlFor="job">Looking for a job</label>
      <div className="profileForm__item">
        <Field type="checkbox" component={Input} name="lookingForAJob" id="job" />
      </div>
      <label htmlFor="jobDesk">My professional skills:</label>
      <div className="profileForm__item">
        <Field component={Textarea} name="lookingForAJobDescription" id="jobDesk" />
      </div>
      <label htmlFor="aboutMe">About me:</label>
      <div className="profileForm__item">
        <Field component={Textarea} name="aboutMe" id="aboutMe" />
      </div>
      <label htmlFor="gitHub">GitHub:</label>
      <div className="profileForm__item">
        <Field component={Input} name="github" id="gitHub" />
      </div>
      <label htmlFor="vk">VK:</label>
      <div className="profileForm__item">
        <Field component={Input} name="vk" id="vk" value="Hello" />
      </div>
      <label htmlFor="facebook">Facebook:</label>
      <div className="profileForm__item">
        <Field component={Input} name="facebook" id="facebook" />
      </div>
      <label htmlFor="instagram">Instagram:</label>
      <div className="profileForm__item">
        <Field component={Input} name="instagram" id="instagram" />
      </div>
      <label htmlFor="twitter">Twitter:</label>
      <div className="profileForm__item">
        <Field component={Input} name="twitter" id="twitter" />
      </div>
      <label htmlFor="website">Website:</label>
      <div className="profileForm__item">
        <Field component={Input} name="website" id="website" />
      </div>
      <label htmlFor="mainlink">MainLink:</label>
      <div className="profileForm__item">
        <Field component={Input} name="mainLink" id="mainlink" />
      </div>
      <label htmlFor="youtube">Youtube:</label>
      <div className="profileForm__item">
        <Field component={Input} name="youtube" id="youtube" />
      </div>
    </form>
  )
}

const ProfileReduxForm = reduxForm({ form: "editProfile" })(ProfileForm);

const ProfileDataEdit = (props) => {
  const onSubmit = (formData) => {
    const dataProfile = {
      ...formData,
      contacts: {
        github: formData.github,
        vk: formData.vk,
        facebook: formData.facebook,
        instagram: formData.instagram,
        twitter: formData.twitter,
        website: formData.website,
        youtube: formData.youtube,
        mainLink: formData.mainlink,
      }
    }
    props.updateDataProfile(dataProfile).then(() => {
      props.setEditMode()
    })
  }

  return (
    <div >
      <ProfileReduxForm setEditMode={props.setEditMode} initialValues={props.initialValues} onSubmit={onSubmit} />
    </div>
  )
}

/*
FormData
facebook: "jj"
gitHub: "j"
instagram: "j"
job: true
jobDesk: "jjj"
mainlink: "j"
twitter: "j"
vk: "jj"
website: "jj"
*/

/*
Request
userId: required(integer)
lookingForAJob: required(boolean)
lookingForAJobDescription: required(string)
fullName: required(string)
contacts: required(object)
  github: required(string)
  vk: required(string)
  facebook: required(string)
  instagram: required(string)
  twitter: required(string)
  website: required(string)
  youtube: required(string)
  mainLink: required(string)
*/

/*
State.profilePage.profile
aboutMe: null
contacts:
  facebook: null
  github: null
  instagram: null
  mainLink: null
  twitter: null
  vk: null
  website: null
  youtube: null
fullName: "qwerty123QWE"
lookingForAJob: false
lookingForAJobDescription: null
photos:
  large: "https://social-network.samuraijs.com/activecontent/images/users/16736/user.jpg?v=12"
  small: "https://social-network.samuraijs.com/activecontent/images/users/16736/user-small.jpg?v=12"
userId: 16736
*/

const mapStateToProps = (state) => {
  return {
    initialValues: { ...state.profilePage.profile, ...state.profilePage.profile.contacts, contacts: null },
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, { updateDataProfile })(ProfileDataEdit)