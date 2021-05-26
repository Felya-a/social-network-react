import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  // props - setStatusThunkCreator, status

  // Замена setState
  // первое это значение, второе это функция для его изменения
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  // const [state, dispatch] = useReducer(reducer, initialState, init)
  // reducer как в redux
  // function reducer (state, action) {
  //   const [count, step] = state
  //   switch (action.type) {
  //     case 'increment':
  //       return {
  //         count: action.count
  //       }
  //     default:
  //       break
  //   }
  // }

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const chengeEditMode = () => {
    setEditMode(!editMode); // работает асинхронно
    if (editMode && props.status != status) props.setStatusThunkCreator(status); // при переключении на span
  }

  const chengeStatusText = (event) => {
    setStatus(event.target.value);
  }

  return (
    <div>
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
          <span disabled={true} onClick={() => { console.log(status); }} onDoubleClick={chengeEditMode}>{props.status || "-------"}</span>
        </div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks;