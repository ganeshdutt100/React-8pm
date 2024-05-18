import  { useState } from 'react'

export const Calculator = () => {
    const[color , setColor] = useState('gray');

 
  return (
    <div>
        <div className='' style={{height:'100vh' ,backgroundColor :color}} >
    <h1 className='text-center text-white'>Select Your background Color</h1>

        

        <div className="btn-group mx-auto " role="group" aria-label="Basic mixed styles example">
  <button onClick={() =>setColor('red') } type="button" className="btn btn-danger">Red</button>
  <button onClick={() =>setColor('yellow') }  type="button" className="btn btn-warning">Yellow</button>
  <button onClick={() =>setColor('green') }  type="button" className="btn btn-success">Green</button>
  <button onClick={() =>setColor('orange') }  type="button" className="btn btn-warning">Orange</button>
  <button onClick={() =>setColor('blue') }  type="button" className="btn btn-primary">Blue</button>
  <button onClick={() =>setColor('black') }  type="button" className="btn btn-dark">Black</button>
</div>

        </div>
    </div>
  )
}
