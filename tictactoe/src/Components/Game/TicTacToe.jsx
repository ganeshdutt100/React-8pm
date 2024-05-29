import React from 'react'
import './TicTacToe.css'
import circleImg from '../images/circle.png'
import crossImg from '../images/cross.png'
export const TicTacToe = () => {
  return (
    <div className='container'>
  <h1 className='title'>Tic Tac Toe Game </h1>
  <div className="bord">
    <div className="row">
      <div className="col"></div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
    <div className="row">
      <div className="col"></div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
    <div className="row">
      <div className="col"></div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  </div>
  <div className="reset btn btn-danger">Reset</div>
    </div>
  )
}
