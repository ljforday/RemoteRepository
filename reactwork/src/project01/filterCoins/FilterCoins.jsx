import React, { useEffect, useState } from 'react'
import classes from './FilterCoins.module.css';

export default function FilterCoins(props) {

  //受控组件
  const [keyword,setKeyword]= useState('');

  //Effect 改造练习
   useEffect(()=>{
    //降低数据过滤次数，用户输入完再过滤。
    //当用户停止输入 1 秒后，在查询. 在开启衣蛾定时器的同时，需关掉上一个定时器
    const timer= setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);
    
    //Effect 回调函数中，可指定一个名为 清理函数的函数作为返回值。
    //在函数中，做一些工作来清除上一次Effect 执行带来的影响
    return()=>{
      clearTimeout(timer);
    }

   },[keyword]);

    const inputHandler = (e)=>{
      setKeyword(e.target.value.trim());
        //
    };
  return (

    <div className={classes.FilterCoins}>
        <input 
        value={keyword}
        onChange={inputHandler}
        className={classes.Search} 
        type="text" placeholder={'please enter words'}/>
    </div>
  )
}
