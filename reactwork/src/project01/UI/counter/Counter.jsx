import React, { useContext } from 'react'
import classes from './Counter.module.css'
import CartContext from '../../../store/cartContext'

// 计数器的组件
function Counter(props) {
  //获取 cartContext
  const ctx=useContext(CartContext);

  //添加购物车函数
  const addButtonHandler = ()=>{
    ctx.addItem(props.coin)
  };

  //删除购物车函数
  const subButtonHandler = ()=>{
    ctx.removeItem(props.coin)
  };

  return (
    <div className={classes.counter}>

        {
        ( props.coin.amount && props.coin.amount !==0) ? 
        <><button onClick={subButtonHandler} className={classes.sub}>-</button>
          <span className={classes.count}>{props.coin.amount}</span>
        </> :null
        }

        
       
        <button onClick={addButtonHandler} className={classes.add}>+</button>
    </div>
  )
}

export default Counter