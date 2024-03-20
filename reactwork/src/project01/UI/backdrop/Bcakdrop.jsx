import React from 'react';
import classes from './Backdrop.module.css';
import ReactDOM from 'react-dom';

//获取增加的 个元素
const backdropRoot= document.getElementById('backdrop-root');

export default function Bcakdrop(props) {
    //return 改变啦
  return ReactDOM.createPortal(
    <div 
    {...props}
    className={`${classes.Bcakdrop} ${props.className}`}>
        {props.children}

    </div>,backdropRoot
  )
}
