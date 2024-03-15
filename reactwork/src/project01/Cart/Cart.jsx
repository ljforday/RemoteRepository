import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.jpg';
import CartContext from '../../store/cartContext';
import CartDetails from './CartDetails/CartDetails';
import CheckRoot from './checkRoot/CheckRoot';

export default function Cart() {

    const ctx =useContext(CartContext);

     //01，添加 一个 state 设置详情是否显示
    
    const [showDetails , setShowDetails]=useState(false)

    //02，state ,设置结账页面的 显示与隐藏

    const[showCheckOut,setshowCheckOut]= useState(false)
    
    //03，显示 详情页的函数

    const toggleDetailsHand =()=>{
      if(ctx.totalAmount===0) {
        setShowDetails(false);return;
      };
      setShowDetails(prevState =>!prevState);
    }

    //结算时，显示

    const showCheckOutHand =()=>{
      if(ctx.totalAmount===0) return;
      setshowCheckOut(true)
    };

    const hideCheckOutHand =()=>{
      setshowCheckOut(false)
    }


  return (
    <div className={classes.Cart} onClick={toggleDetailsHand}>

      {showCheckOut && < CheckRoot onHide={hideCheckOutHand}/>}
      {/* 引入购物车详情,列表*/}
      {(showDetails &&ctx.totalAmount !==0) ? <CartDetails/>:null}

        <div className={classes.Icon}>
            <img src={iconImg} alt="" />
            {ctx.totalAmount===0? null:<span className={classes.tAmount}>{ctx.totalAmount}</span>}
            
        </div>
        <p className={classes.price}>{ctx.totalPrice}</p>
        <button onClick={showCheckOutHand}
        className={classes.btn}>结算</button>
    </div>
  )
}
