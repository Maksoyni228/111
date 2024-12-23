import React from 'react';
import logo from '../../img/img.png';

function Header({ toggleMenu }) {
    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="developer-info">
                    <p className="fam">Михайлов</p>
                    <p>Максим Михайлович</p>
                </div>
            </div>
            <div className="header-right">
                {/* Гамбургер-меню */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar1"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;