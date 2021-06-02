const ProfileData = ({ profile, isOwner, setEditMode }) => {
  return (
    <div>
      <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
      {profile.lookingForAJobDescription
        && <div>My professionals skills: {profile.lookingForAJobDescription}</div>
      }
      {profile.aboutMe
        && <div>About me: {profile.aboutMe}</div>
      }
      {Object.keys(profile.contacts).map(item => {
        if (!profile.contacts[item]) return;
        return <Contact key={item} contactTitle={item} contactValue={profile.contacts[item]} />
      })}
      {isOwner &&
        <button onClick={setEditMode}>Редактировать профиль</button>
      }
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>{`${contactTitle[0].toUpperCase()}${contactTitle.slice(1)}`}: <a href={"https:/" + contactValue}>{contactValue}</a></div>
  )
}


export default ProfileData;