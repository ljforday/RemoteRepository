import React from 'react'
import ReactDOM from 'react-dom';
import classess from './checkout.module.css'

const checkout =document.getElementById('check-root')

export default function CheckRoot(props) {
  return ReactDOM.createPortal(
    <div className={classess.checkout}>
      <button onClick={()=>{ return props.onHide()}}>关闭</button>
    </div>,
    checkout)
}
