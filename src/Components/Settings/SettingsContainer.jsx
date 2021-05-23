import { connect } from "react-redux";
import { SettingsChangeScore } from "../../redux/profileReducer";
import Settings from "./Settings";

const mapStateToProps = (state) => {
    return {
        SettingsScore: state.profilePage.SettingsScore,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newScore: () => {
            dispatch(SettingsChangeScore())
        }
    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default SettingsContainer;