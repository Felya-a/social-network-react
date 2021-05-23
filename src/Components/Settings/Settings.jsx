import classes from './Settings.module.css';

const Settings = (props) => {

    let ClickButton = () => {
        props.newScore()
    }
    
    return (
        <div className={classes.settings}>
            <div className={classes.settingItem}>
                <button onClick={ClickButton} >Кнопка</button>
            </div>
            <div className={classes.settingvalue}>
                {props.SettingsScore}
            </div>
        </div>
    )
}

export default Settings;