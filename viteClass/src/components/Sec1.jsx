import { useState } from "react";
import './style.css'
import style from './Sec1.module.css'


export const Sec1 = () => {
    const [count, setCount] = useState(0);
    function add(){
       setCount(count + 1);
    }
    function sub(){
       setCount(count - 1);
    }
  return (
    <div className=" container d-flex gap-4">
    <h1 className={style["heading1"]}>this is a game</h1>
    <button onClick={add}>add</button>
    <input type="text" disabled value={count} size={2}></input>
    {/* <p style={{border:'4px'}}>{count}</p> */}
    <button onClick={sub}>sub</button>
    </div>
  )
}
