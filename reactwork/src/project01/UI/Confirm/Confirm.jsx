import React from 'react'
import Bcakdrop from '../backdrop/Bcakdrop'
import classes from './Confirm.module.css'

export default function Confirm(props) {
  return (
   <Bcakdrop 
   onClick={props.onCancel}
   className={classes.Confirm}>
        <div className={classes.ConfirmSure}>
            <p className={classes.ConfirmText}>{props.ConfirmText}</p>
            <div>
                <button onClick={(e)=>{props.onCancel(e)}}>取消</button>
                <button onClick={(e)=>{props.onOk(e)}}>确认</button>
            </div>
        </div>
   </Bcakdrop>
  )
}
