import React from 'react'
import classes from './Bar.module.css'

export default function Bar(props) {
  return (
   <div className={classes.Bar}>
        <div className={classes.price}>{props.totalPrice}</div>
        <button className={classes.button}>pay</button>
    </div>
  )
}
