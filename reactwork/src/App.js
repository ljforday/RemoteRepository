import { useState } from "react";
import Coins from "./project01/coins/Coins";
import CartContext from "./store/cartContext";
import FilterCoins from "./project01/filterCoins/FilterCoins";
import Cart from "./project01/Cart/Cart";

const COINSDATA =[
  {
    id:'001',
    title:'1号古币',
    word:'一千年前的，银质古币',
    price:100,
    img:'./img/coins/1.jpg'
  },
  {
    id:'002',
    title:'2号古币',
    word:'二千年前的，铜质古币',
    price:200,
    img:'./img/coins/2.jpg'
  },
  {
    id:'003',
    title:'3号古币',
    word:'三千年前的，银质古币',
    price:300,
    img:'./img/coins/3.jpg'
  },
  {
    id:'004',
    title:'4号古币',
    word:'四千年前的，金质古币',
    price:400,
    img:'./img/coins/4.jpg'
  },
  {
    id:'005',
    title:'5号古币',
    word:'五千年前的，银质古币',
    price:500,
    img:'./img/coins/5.jpg'
  },
];

function App() {

  // 创建state ,存储 古币列表
  const [coinsData ,setCoinsData] =useState(COINSDATA)

  // 创建state，存储购物车数据。商品tems，商品总数totalAmount，总价totalPrice

  const[cartData,setcartData]=useState({
    items:[],
    totalAmount:0,
    totalPrice:0
  })

  //创建一个过滤coins 的函数
  const filterHandler =(keyword)=>{
    const newCoinsData = COINSDATA.filter(item =>item.title.indexOf(keyword) !==-1);

    setCoinsData(newCoinsData);
  }

  //向购物车添加商品.  coin 表示要添加的商品
  const addItem=(coin)=>{
    // 复制购物车
    const newCart ={...cartData};
    //判断购物车中是否存在该商品
    if(newCart.items.indexOf(coin)===-1){
    // 将coin 添加到购物车中
    newCart.items.push(coin);
    // 修改商品的数量
    coin.amount = 1;
    }else{
      // 增加商品数量
    coin.amount +=1;
    }
// 增加总数 ，总金额
    newCart.totalAmount +=1;
    newCart.totalPrice +=coin.price

    // 重新设置购物车
    setcartData(newCart);
  };

  //二；减少商品数量
  const removeItem =(coin)=>{
    //复制购物车
    const newCart ={...cartData};
    //减少商品的数量
    coin.amount -=1;
    //检查商品数量是否为0
    if(coin.amount ===0){
      newCart.items.splice(newCart.items.indexOf(coin),1)
    };
    //修改商品总数和金额
    newCart.totalAmount -=1;
    newCart.totalPrice -=coin.price

    setcartData(newCart);
  };

  const clearCart=()=>{
    
    const newCart ={...cartData};
    //reduce the number of goods in the cart to 0
    newCart.items.forEach(item=> delete item.amount);
    newCart.items=[];
    newCart.totalAmount=0;
    newCart.totalPrice=0;

    setcartData(newCart);
  };

  return (
    <CartContext.Provider value={{...cartData,addItem,removeItem,clearCart}}>
      <div>
        <FilterCoins onFilter={filterHandler}/>
      <Coins coinsData={coinsData}/>
      <Cart/>
     </div>
    </CartContext.Provider>
    
  );
}

export default App;
