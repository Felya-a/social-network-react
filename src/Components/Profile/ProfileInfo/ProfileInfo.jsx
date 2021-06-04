import Preloader from '../../common/PreLoader/Preloader';
import styles from './ProfileInfo.module.css';
import UserPhotoSmall from '../../../assets/images/AvaSmall.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataEdit from './ProfileData/ProfileDataEdit';


let ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  function photoSelected(event) {
    props.savePhoto(event.target.files[0])
  }

  return (
    <div>
      {(props.profile) ?
        <div>
          <div className={styles.avatarBlock}>
            <img src={props.profile.photos.large || UserPhotoSmall} alt="" />
          </div>
          <div className={styles.descriptionBlock}>
            {props.isOwner
              ?
              <div>
                <input type="file" id="file_photo" className={styles.inputPhoto} onChange={photoSelected} />
                <label htmlFor="file_photo"><span>Загрузить фото</span></label>
              </div>
              : null
            }
            <h4>{props.profile.fullName}</h4>
            <ProfileStatusWithHooks setStatusThunkCreator={props.setStatusThunkCreator} status={props.status} isOwner={props.isOwner} />
            <br />
            {editMode
              ? <ProfileDataEdit setEditMode={() => setEditMode(false)} />
              : <ProfileData profile={props.profile} setEditMode={() => setEditMode(true)} isOwner={props.isOwner} />
            }
          </div>
        </div> :
        <Preloader />
      }
    </div>
  )
}

export default ProfileInfo;