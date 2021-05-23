import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.status,
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            statusText: nextProps.status,
        })
    }
    chengeEditMode = () => {
        this.setState({
            editMode: this.state.editMode ? false : true,
        })
        // if (this.state.statusText != this.props.status) 
        this.props.setStatusThunkCreator(this.state.statusText);
    }
    chengeStatusText = (event) => {
        this.setState({
            statusText: event.target.value,
        })
    }

    render() {
        return <div>
            {this.state.editMode
                ?
                <div>
                    <input
                        onChange={this.chengeStatusText}
                        autoFocus={true}
                        onBlur={this.chengeEditMode}
                        type="text"
                        value={this.state.statusText}
                        />
                    {/* <input onChange={} autoFocus={true} onBlur={() => {this.chengeEditMode(); this.props.setStatusThunkCreator()}} type="text" value={this.props.status} /> */}
                </div>
                :
                <div>
                    <span disabled={true} onDoubleClick={this.chengeEditMode}>{this.props.status || "-------"}</span>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;