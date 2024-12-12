import React, { useState } from 'react';
import UISection from './UISection';
import TextField from './TextField';
import CheckboxRadioButton from './CheckboxRadioButton';
import Footer from './Footer';
import logo from './logo.png';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функции для открытия и закрытия меню
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div>
            {/* Шапка страницы */}
            <header className="header">
                <div className="header-left">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="developer-info">
                        <p>Иван Иванов</p>
                    </div>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><a href="#">Напутственное слово</a></li>
                        <li><a href="#">Сетка</a></li>
                        <li><a href="#">Типографика</a></li>
                        <li><a href="#">UI</a></li>
                    </ul>
                </nav>
                <div className="header-right">
                    <button className="menu-toggle" onClick={openMenu}>
                        ☰
                    </button>
                </div>
            </header>

            {/* Всплывающее окно */}
            <div className={`popup-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="popup-menu-content">
                    <button className="close-btn" onClick={closeMenu}>×</button>
                    <div className="popup-left-panel">
                        <div className="logo">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <p className="task">Задание выполнил</p>
                        <h2>Михайлов Максим Михайлович</h2>
                        <p className="description">Студент 3 курса КГТТ.</p>
                        <p className="description">Специальность: информационные системы и программирование</p>
                        <p className="phone">Телефон: +7 (123) 456-78-90</p>
                        <p className="telegram">Telegram: <a href="https://t.me/username" target="_blank"
                                                             rel="noopener noreferrer">@username</a></p>
                    </div>
                </div>
            </div>

            {/* Основное содержимое сайта */}
            <main>
            <h1>Тестовое задание</h1>
                <p>Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку...</p>
                <UISection />
                <TextField />
                <CheckboxRadioButton />
            </main>

            <Footer />
        </div>
    );
};

export default App;
