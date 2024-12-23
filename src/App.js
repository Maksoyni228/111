// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './Main';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import LeftPanel from './components/LeftPanel/LeftPanel';
import './components/Header/Header.css';
import './components/Menu/Menu.css';
import './components/Footer/Footer.css';
import './components/LeftPanel/LeftPanel.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null); // Добавляем состояние для активной секции

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Рассчитываем отступ, чтобы не докручивать до конца
            const offset = 100; // Размер отступа в пикселях (можно настроить)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            // Прокручиваем страницу с отступом
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setActiveSection(sectionId); // Обновляем активную секцию при прокрутке
        } else {
            console.error(`Section with id "${sectionId}" not found.`);
        }
    };

    // Функция для отслеживания текущей секции при прокрутке
    const handleScroll = () => {
        const sections = ['TestTaskSection', 'PlatformsSection', 'TypographySection', 'UI'];
        let currentSection = null;

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Если верхняя часть элемента находится в поле зрения
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    currentSection = section;
                }
            }
        });

        if (currentSection !== activeSection) {
            setActiveSection(currentSection);
        }
    };

    // Подключаем обработчик события scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]); // Зависимость от activeSection

    return (
        <Router>
            <div className="app">
                <Header toggleMenu={toggleMenu}/>
                <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu}/>
                <LeftPanel scrollToSection={scrollToSection} activeSection={activeSection}/> {/* Передаем activeSection */}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
