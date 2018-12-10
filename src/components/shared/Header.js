import React from 'react';
import SearchBar from "./SearchBar";

import './css/Header.css';
import logo from './images/logo.png';

const Header = ({onSearchFormSubmit}) => {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="log"/>
                <SearchBar onSearchFormSubmit={onSearchFormSubmit}/>
            </div>
        </header>
    );
};

export default Header;