// import {useState} from 'react'

import { useState } from "react"

export const Navbar = (props) => {
  
  window.onscroll = () => {
    let nav = document.querySelector('.navbar');
    if(nav && window.scrollY >  20){
        nav.classList.add('on-scroll')
    }
    else{
        nav.classList.remove('on-scroll')

    }
}
    

  return (
    <>
 <nav className={`navbar fixed-top navbar-expand-sm navbar-${props.mode}  ` }>
  <div className="container">
    <a className="navbar-brand logo" href="#"><i className="fa-solid fa-code " ></i> GD <span className="fs-1  text-secondry">.</span> </a>

{/* Start phone View */}
  <div className="d-lg-none " >
  <button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <i className="fa-solid fa-bars-staggered fs-3 " style={{color:'b52ff3'}} />

  </button>
  <div className="offcanvas offcanvas-start phoneSizeMode" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div className="offcanvas-header">
      <h5 className="" id="offcanvasWithBothOptionsLabel">
      <span className="navbar-brand logo" href="#"><i className="fa-solid fa-code " ></i> Ganesh Dutt</span>
      </h5>

      <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close" />
      {/* <i class="fa-solid fa-bars-staggered"></i> */}
    </div>
    <div className="offcanvas-body">

    {/* start phoneSize */}
    <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
    <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
          <i className="fa-solid me-2 fa-house" />Home
            <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i className="fa-solid me-2 fa-user" />About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid me-2 fa-list-check"></i> Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid me-2 fa-phone"></i> Contact-Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid me-2 fa-pen-to-square"></i> My Notes</a>
        </li>
        
      
      </ul>
        {/* Resume */}
        <div className="d-flex justify-content-around">
        <a className=" ms-3 mt-4" href="#">
       <div className="download-button  mx-auto ">
  <div className="docs"><svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth={2} stroke="currentColor" height={20} width={20} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line y2={13} x2={8} y1={13} x1={16} /><line y2={17} x2={8} y1={17} x1={16} /><polyline points="10 9 9 9 8 9" /></svg> Resume</div>
  <div className="download">
    <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth={2} stroke="currentColor" height={24} width={24} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line y2={3} x2={12} y1={15} x1={12} /></svg>
  </div>
</div>

          </a>



 {/* darkModeEnable  */}

 
<label className="theme-switch ms-3 mt-4">
  <input type="checkbox" onClick={props.toggleMode} className="theme-switch__checkbox" />
  <div className="theme-switch__container">
    <div className="theme-switch__clouds" />
    <div className="theme-switch__stars-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
     
      </svg>
    </div>
    <div className="theme-switch__circle-container">
      <div className="theme-switch__sun-moon-container">
        <div className="theme-switch__moon">
          <div className="theme-switch__spot" />
          <div className="theme-switch__spot" />
          <div className="theme-switch__spot" />
        </div>
      </div>
    </div>
  </div>
</label>
</div>
    </div>
  </div>
</div>
    {/* end phoneSize */}





    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto gap-4 mt-3 mt-lg-0 laptopSize pt-1">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
          <i className="fa-solid me-2 fa-house" />Home
            <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i className="fa-solid me-2 fa-user" />About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid me-2 fa-list-check"></i> Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid me-2 fa-phone"></i> Contact-Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid me-2 fa-pen-to-square"></i> My Notes</a>
        </li>
        
      
      </ul>
        {/* Resume */}
        <a className="nav-link ms-3" href="#">
       <div className="download-button">
  <div className="docs"><svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth={2} stroke="currentColor" height={20} width={20} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line y2={13} x2={8} y1={13} x1={16} /><line y2={17} x2={8} y1={17} x1={16} /><polyline points="10 9 9 9 8 9" /></svg> Resume</div>
  <div className="download">
    <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth={2} stroke="currentColor" height={24} width={24} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line y2={3} x2={12} y1={15} x1={12} /></svg>
  </div>
</div>

          </a>



 {/* darkModeEnable  */}

 
<label className="theme-switch ms-3">
  <input type="checkbox" onClick={props.toggleMode} className="theme-switch__checkbox" />
  <div className="theme-switch__container">
    <div className="theme-switch__clouds" />
    <div className="theme-switch__stars-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
       
      </svg>
    </div>
    <div className="theme-switch__circle-container">
      <div className="theme-switch__sun-moon-container">
        <div className="theme-switch__moon">
          <div className="theme-switch__spot" />
          <div className="theme-switch__spot" />
          <div className="theme-switch__spot" />
        </div>
      </div>
    </div>
  </div>
</label>

 {/* darkModeEnable  */}
 

    </div>
  </div>
</nav>


    </>
  )
}
