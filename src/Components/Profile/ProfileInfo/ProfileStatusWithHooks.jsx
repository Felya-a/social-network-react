import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  // setStatusThunkCreator, status
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const chengeEditMode = () => {
    setEditMode(!editMode); // работает асинзронно
    if (editMode && props.status != status) props.setStatusThunkCreator(status); // при переключении на span
  }

  const chengeStatusText = (event) => {
    setStatus(event.target.value);
  }

  return <div>
    {editMode
      ?
      <div>
        <input
          onChange={chengeStatusText}
          autoFocus={true}
          onBlur={chengeEditMode}
          type="text"
          value={status}
        />
      </div>
      :
      <div>
        {/* <span disabled={true} onDoubleClick={this.chengeEditMode}>{this.props.status || "-------"}</span> */}
        <span disabled={true} onClick={() => {console.log(editMode);}} onDoubleClick={chengeEditMode}>{props.status || "-------"}</span>
      </div>
    }
  </div>
}


export default ProfileStatusWithHooks;