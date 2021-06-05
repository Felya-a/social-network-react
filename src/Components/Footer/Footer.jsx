import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    state = {
        time: 'Time'
    }
    componentDidMount() {
        setInterval(() => { // часы
            let time = new Date();
            let hours = this.TotalTime(time.getHours());
            let minutes = this.TotalTime(time.getMinutes());
            let sec = this.TotalTime(time.getSeconds());
            this.setState({ time: `${hours}:${minutes}:${sec}` })
        }
            , 1000);
    }
    // добавление лидирующего нуля
    TotalTime(str) {
        if (String(str).length == 1) return "0" + str;
        return str
    }
    render() {
        return <div className="footer">
            {this.state.time}
        </div>
    }
}

export default Footer;