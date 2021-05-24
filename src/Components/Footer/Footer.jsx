import React from 'react';
import { connect } from 'react-redux';
import classes from './Footer.module.css';
import { setTimeActionCreator } from '../../redux/footerReducer.js';

class Footer extends React.Component {
    state = {
        time: 'Time'
    }
    componentDidMount() {
        setInterval(() => { // часы
            let time = this.getTime();
            let hours = this.TotalTime(String(time.getHours()));
            let minutes = this.TotalTime(String(time.getMinutes()));
            let sec = this.TotalTime(String(time.getSeconds()));
            this.setState({time: `${hours}:${minutes}:${sec}`})
        }
            , 1000);
    }
    TotalTime(str) {
        if (str.length == 1) return "0" + str;
        return str
    }
    getTime() {
        return new Date();
    }
    render() {
        return <div
            className={classes.footer}>{this.state.time}
        </div>
    }
}
// export default Footer;
const mapStateToProps = (state) => {
    return {
        time: state.footer.time,
    }
}
export default connect(mapStateToProps, { setTimeActionCreator })(Footer);