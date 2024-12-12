import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">Логотип</div>
            <nav>
                <ul>
                    <li><a href="#">Desktop</a></li>
                    <li><a href="#">Mobile</a></li>
                </ul>
            </nav>
            <button>Написать</button>
        </header>
    );
};

export default Header;