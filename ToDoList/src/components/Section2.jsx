import React, {useState} from 'react'

export const Section2 = () => {
    const [input, setInput] = useState('');
    const [inputArray, setInputArray] = useState([]);
   
    let inputFun = () =>{
        setInputArray([...input , inputFun])
        setInputArray('');
        
    }

  return (
    <div className=' bg-body-tertiary mx-auto' style={{width:'500px'}}>
        <h1>section 2</h1>
        <input type="text" placeholder='Enter your task here..!' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={inputFun} className='btn btn-success'>Add Your Task</button>

        <ul className="AddList d-flex justify-content-around mt-4 pb-3">
            <li className='d-flex gap-5'>home 
            <button className='btn btn-danger'>Remove</button>
            
             </li>
        </ul>
    </div>
  )
}
