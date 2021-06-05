import Preloader from '../../common/PreLoader/Preloader';
import './ProfileInfo.scss';
import UserPhotoSmall from '../../../assets/images/AvaSmall.png';
import ProfileStatus from './ProfileStatusWithHooks';
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
        <div className='profileInfo'>
          <div className="profileInfo__avatarBlock">
            <img src={props.profile.photos.large || UserPhotoSmall} alt="" />
            {props.isOwner
              ?
              <div>
                <input type="file" id="file_photo" className="profileInfo__inputPhoto" onChange={photoSelected} />
                <label htmlFor="file_photo"><span>Загрузить фото</span></label>
              </div>
              : null
            }
          </div>
          <div className="profileInfo__descriptionBlock">
            <h4>{props.profile.fullName}</h4>
            <span className='profileInfo__descriptionBlock_statusSpan'>Status:</span>
            <ProfileStatus setStatusThunkCreator={props.setStatusThunkCreator} status={props.status} isOwner={props.isOwner} />
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