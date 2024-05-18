import {useEffect, useState} from 'react'

export const UseEffect = (props) => {
    const [count, setCount] = useState(0);
useEffect(() =>{
    alert("hey welcome my page")
},[]);


useEffect(()=>{
    alert("Count was changed")
},[count])


useEffect(() => {
  alert("main nabar hu .. ")

  return () => {
  alert("navbar ko hta diya hain bhaiya ")
    
  }
}, [])


  return (
    <div>
    <p>i am navbar and count renderd page {props.render} </p>
<button onClick={()=>{setCount(count+1)}}>Add</button>
<input type="text" value={count} disabled size="5"/>
<button onClick={()=>{setCount(count-1)}}>Sub</button>

    </div>
  )
}
