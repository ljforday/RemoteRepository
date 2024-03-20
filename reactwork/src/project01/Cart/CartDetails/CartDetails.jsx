import React, { useContext, useState } from 'react'
import Bcakdrop from '../../UI/backdrop/Bcakdrop'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cartContext';
import Coin from '../../coins/coin/Coin';
import Confirm from '../../UI/Confirm/Confirm';

export default function CartDetails() {

   const ctx= useContext(CartContext)

   // 设置 state 控制确认框的 显示

   const[showConfirm,setShowConfirm]= useState(false);

   //添加函数 显示确认窗口

   const showConfirmHand =()=>{ setShowConfirm(true) }

   const cancelHand =(e)=>{
    e.stopPropagation();//阻止 时间冒泡
    setShowConfirm(false)  
};

   const okHand =()=>{
   //clear cart
   ctx.clearCart()
 }

  return (
    <Bcakdrop>
        {showConfirm && <Confirm 
        onOk={okHand}
        onCancel ={cancelHand}
        ConfirmText={"确认清空购物车吗？"}/>}

        <div className={classes.CartDetails} onClick={e=>e.stopPropagation()}>
            <header className={classes.Header}>
                <h2>古币详情</h2>
                <div onClick={showConfirmHand}>
                    <span>清空购物车</span>
                </div>
            </header>
            <div className={classes.Coinlist}>
              {  ctx.items.map(
                    (item)=>{return <Coin noWord key={item.id} coin={item}/>}
                )}
            </div>
        </div>
    </Bcakdrop>
  )
}
