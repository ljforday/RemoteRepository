import React from 'react'
import classes from './Coin.module.css'
import Counter from '../../UI/counter/Counter'

// 单个古币组件
export default function Coin(props) {
  return (
    <div className={classes.coin}>
        <div className={classes.imgbox}>
            <img src={props.coin.img} alt="" />
        </div>
        
        <div className={classes.wordBox}>
            <h1 className={classes.title}>{props.coin.title}</h1>

            {props.noWord?null:<p className={classes.word}>{props.coin.word}</p>}
            
            <div className={classes.num}>
              <span className={classes.price}>{props.coin.price}</span>
                
                <Counter coin={props.coin}/>
            </div>
        </div>
    </div>
  )
}
