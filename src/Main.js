import React from 'react';
import TypographySection from './TypographySection';
import PlatformsSection from './PlatformsSection';
import TestTaskSection from './TestTaskSection';
import UISection from './UISection';

const Main = () => {
    return (
        <main>
            <TypographySection />
            <PlatformsSection />
            <TestTaskSection />
            <UISection />
        </main>
    );
};

export default Main;