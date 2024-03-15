import React from 'react'
import Coin from './coin/Coin'
import classes from './Coins.module.css'

// 古币列表组件

export default function Coins(props) {
  return (
    // 滚动条设置给了coins.而且 coin 是每个数组中的对象
    <div className={classes.coins}>
      {props.coinsData.map(
        (item)=>{return <Coin key={item.id} coin={item}/>}
      )}
    </div>
  )
}
