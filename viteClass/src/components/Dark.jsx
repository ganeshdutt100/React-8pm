import React, { useState } from 'react';

export const Dark = () => {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }



    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${darkMode && window.scrollY > 20 ? 'on-scroll' : ''}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: darkMode ? 'white' : 'black' }}>
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" style={{ color: darkMode ? 'white' : 'black' }}>Disabled</a>
                        </li>
                    </ul>

                    <div className="form-check form-switch" style={{ color: darkMode ? 'white' : 'black' }}>
                        <input
                            onClick={toggleDarkMode}
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={darkMode} // Ensure checkbox reflects dark mode state
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode ? 'Enable Dark mode' : 'Enable light mode'}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
};
