import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import classess from './checkout.module.css'
import CartContext from "../../../store/cartContext"
import CheckItem from './CheckItem/CheckItem';
import Bar from './Bar/Bar';

const checkout =document.getElementById('check-root')

export default function CheckRoot(props) {

  const ctx = useContext(CartContext)

  return ReactDOM.createPortal(

    <div className={classess.checkout}>
      <button onClick={()=>{ return props.onHide()}}>关闭</button>

      <div className={classess.describe}>
        <header className={classess.header}>
          <h3>物品详情</h3>
        </header>
        <div className={classess.coins}>
          {ctx.items.map(item=><CheckItem key={item.id} coin={item}/>)}
        </div>
        <footer className={classess.footer}>
            <p className={classess.payPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
      <Bar totalPrice={ctx.totalPrice}/>

    </div>,
    checkout)
}
