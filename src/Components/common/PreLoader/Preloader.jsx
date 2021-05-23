import React from 'react'
import classes from './Preloader.module.css'

let Preloader = (props) => {

  return (
    <div className={classes.preloader}>
      <div className={classes.spinner}></div>
    </div>
  )
}

export default Preloader;