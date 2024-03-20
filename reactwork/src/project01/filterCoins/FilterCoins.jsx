import React from 'react'
import classes from './FilterCoins.module.css';

export default function FilterCoins(props) {


    const inputHandler = (e)=>{
        const keyword =e.target.value.trim();
        props.onFilter(keyword);
    }
  return (

    <div className={classes.FilterCoins}>
        <input 
        onChange={inputHandler}
        className={classes.Search} 
        type="text" placeholder={'please enter words'}/>
    </div>
  )
}
