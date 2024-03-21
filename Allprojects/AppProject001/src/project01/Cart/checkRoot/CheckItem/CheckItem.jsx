import React from 'react'
import classes from './CheckItem.module.css'
import Counter from '../../../UI/counter/Counter'

export default function CheckItem(props) {
  return (
    <div className={classes.CheckItem}> 
        <div  className={classes.Coinsimg}>
            <img src={props.coin.img} alt=''/>
        </div>
        <div className={classes.Describe}>
            <h3 className={classes.title}>{props.coin.title}</h3>
            <div className={classes.priceouter}>
                <Counter coin={props.coin}/>
                <div>${props.coin.price*props.coin.amount}</div>
            </div>
        </div>
    </div>
  )
}
