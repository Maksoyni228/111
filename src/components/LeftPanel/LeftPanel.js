// src/components/LeftPanel/LeftPanel.js
import React, { useEffect } from 'react';
import './LeftPanel.css';

function LeftPanel({ scrollToSection, activeSection }) {

    const handleClick = (section) => {
        if (scrollToSection) {
            scrollToSection(section);
        } else {
            console.error("scrollToSection is not defined");
        }
    };

    const getButtonClass = (section) => {
        return activeSection === section ? 'active' : '';
    };

    return (
        <div className="left-panel">
            <nav className="menu-links">
                <ul>
                    <li><button className={getButtonClass('TestTaskSection')} onClick={() => handleClick('TestTaskSection')}>Напутственное слово</button></li>
                    <li><button className={getButtonClass('PlatformsSection')} onClick={() => handleClick('PlatformsSection')}>Сетка</button></li>
                    <li><button className={getButtonClass('TypographySection')} onClick={() => handleClick('TypographySection')}>Типографика</button></li>
                    <li><button className={getButtonClass('UI')} onClick={() => handleClick('UI')}>UI</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftPanel;
