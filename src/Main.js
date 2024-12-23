// src/Main.js
import React from 'react';
import TestTaskSection from './components/TestTaskSection/TestTaskSection';
import PlatformsSection from './components/PlatformsSection/PlatformsSection';
import TypographySection from './components/TypographySection/TypographySection';
import UI from './components/UI/UI';
import './styles/styles.css';
import './Main.css';

function Main() {
    return (
        <div className="main">
            <div id="TestTaskSection">
                <TestTaskSection />
            </div>
            <div id="PlatformsSection">
                <PlatformsSection />
            </div>
            <div id="TypographySection">
                <TypographySection />
            </div>
            <div id="UI">
                <UI />
            </div>
        </div>
    );
}

export default Main;
