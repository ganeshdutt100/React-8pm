import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Class2 = (props) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handledarkMode=() =>{
    setDarkMode(!isDarkMode)
  }

  const changeDarkMode = {
    backgroundColor : isDarkMode ? 'black':'white',
   color : isDarkMode ? 'white':'black'
  }



  return (
    <div>
      <div className="container my-5 py-5 z-depth-1" style={changeDarkMode}>
        {/* <!--Section: Content--> */}
        <section className="dark-grey-text text-center">
          <h3 className="font-weight-bold pt-4 mb-4">{props.heading} {props.secondH}</h3>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={isDarkMode}
              onChange={handledarkMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
          <h5 className="font-weight-bold font-italic mb-5">{props.para1}{props.pera}</h5>
          <div className="row mx-lg-5 mx-md-3">
            <div className="col-md-6 mb-4">
              <div className="view mb-5">
                <p>{props.img1}</p>
                <p>{props.img2}</p>
              </div>
              <h5 className="font-weight-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h5>
            </div>
            <div className="col-md-6 mb-4">
              <div className="view mb-5">
                <p>{props.img1A}</p>
                <p>{props.img2A}</p>
              </div>
              <h5 className="font-weight-normal ">Ut enim ad minim veniam, quis nostrud ut aliquip ex ea commodo consequat.</h5>
              <p>{props.message}</p>
            </div>
          </div>
        </section>
        {/* <!--Section: Content--> */}
      </div>
    </div>
  );
};

Class2.propTypes = {
  message: PropTypes.string.isRequired,
  // Add other prop types here based on your usage
  heading: PropTypes.string,
  secondH: PropTypes.string,
  para1: PropTypes.string,
  pera: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img1A: PropTypes.string,
  img2A: PropTypes.string,
};

export default Class2;
