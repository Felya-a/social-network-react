import styles from './ProfileData.scss'

const ProfileData = ({ profile, isOwner, setEditMode }) => {
  return (
    <div className='profileData'>
      <div className='profileData__item'>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
      {profile.lookingForAJobDescription &&
        <div className='profileData__item'>My professionals skills: {profile.lookingForAJobDescription}</div>
      }
      {profile.aboutMe &&
        <div className='profileData__item'>About me: {profile.aboutMe}</div>
      }
      <div className="profileData__contacts">
        <span className='profileData__contacts_title'>Contacts:</span>
        {Object.keys(profile.contacts).map(item => {
          if (!profile.contacts[item]) return;
          return <Contact key={item} contactTitle={item} contactValue={profile.contacts[item]} />
        })}
      </div>
      {isOwner &&
        <button className='btn' onClick={setEditMode}>Редактировать профиль</button>
      }
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className='profileData__contacts item__contacts'>
      {`${contactTitle[0].toUpperCase()}${contactTitle.slice(1)}`}: <a href={contactValue}>{contactValue}</a>
    </div>
  )
}


export default ProfileData;