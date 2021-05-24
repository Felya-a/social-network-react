import Preloader from '../../common/PreLoader/Preloader';
import classes from './ProfileInfo.module.css';
import UserPhotoSmall from '../../../assets/images/AvaSmall.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


let ProfileInfo = (props) => {
    return (
        <div>
            {(props.profile && props.status) ?
                <div>
                    <div className={classes.avatarBlock}>
                        <img src={props.profile.photos.large || UserPhotoSmall} alt="" />
                        {/* <img src="https://i09.fotocdn.net/s118/c2205463c8129656/user_l/2687642087.jpg" alt="" /> */}
                    </div>
                    <div className={classes.descriptionBlock}>
                        <h4>{props.profile.fullName}</h4>
                        <ProfileStatusWithHooks setStatusThunkCreator={props.setStatusThunkCreator} status={props.status}/>
                        {props.profile.contacts? <div>VK: <a href={"https:/" + props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div> : null}
                        {props.profile.contacts? <div>Github: <a href={"https:/" + props.profile.contacts.github}>{props.profile.contacts.github}</a></div> : null}
                        {props.profile.contacts? <div>Instagram: <a href={"https:/" + props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div> : null}
                    </div>
                </div>:
                <Preloader />
            }
        </div>
    )
}

export default ProfileInfo;