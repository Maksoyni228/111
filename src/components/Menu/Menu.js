import React from 'react';
import logo from '../../img/img.png';  // Путь к логотипу
import link from '../../img/linka.png';  // Путь к линке

function Menu({ isOpen, toggleMenu }) {
    return (
        <div className={`popup-menu ${isOpen ? 'open' : ''}`}>
            <div className="popup-menu-content">
                <button className="close-btn" onClick={toggleMenu}>×</button>
                {/* Левая панель с информацией */}
                <div className="popup-left-panel">

                    {/* Логотип и текст "Задание выполнил" */}
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                        <h6>Задание выполнил</h6>
                    </div>

                    {/* Заголовок и информация */}
                    <h2>Михайлов<br/> Максим Михайлович</h2>
                    <div className="info">
                        <h6>Студент 3 курса КГТТ, специальность: Информационные системы и программирование </h6>
                    </div>

                    {/* Номер телефона */}
                    <div className="phone">
                        +7 (800) 555-35-35
                    </div>

                    {/* Логотип и ссылка внизу */}
                    <div className="bottom-section">
                        <div className="logo">
                            <img src={link} alt="Telegram"/>
                        </div>
                        <div className="telegram">
                            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                                Ссылка на соцсеть/мессенджер
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
