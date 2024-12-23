import React, { useState, useRef, useEffect } from 'react';
import './TypographySection.css';

function TypographySection() {
    const [activeSelector, setActiveSelector] = useState('desktop');
    const [sharedText, setSharedText] = useState('');
    const activeLineRef = useRef(null);
    const buttonsRef = useRef([]);

    const typographyData = {
        desktop: {
            nonEditable: [
                { className: 'typography', text: 'Заголовок H1, 48/56, bold' },
                { className: 'typography', text: 'Заголовок H2, 32/40, bold' },
                { className: 'typography', text: 'Заголовок H3, 24/32, medium' },
                { className: 'typography', text: 'Заголовок H4, 18/28, medium' },
                { className: 'typography', text: 'Лид P_Lead, 24/32, regular' },
                { className: 'typography', text: 'Крупный текст P_18, 18/28, regular' },
                { className: 'typography', text: 'Основной текст P_16, 16/24, regular' },
                { className: 'typography', text: 'Вспомогательный текст P_14, 14/20, regular' },
            ],
            editable: [
                { className: 'desc_typography-h1', text: 'Текст заголовка' },
                { className: 'desc_typography-h2', text: 'Текст заголовка' },
                { className: 'desc_typography-h3', text: 'Текст заголовка' },
                { className: 'desc_typography-h4', text: 'Текст заголовка' },
                { className: 'desc_typography-h5', text: 'Текст лида' },
                { className: 'desc_typography-h6', text: 'Крупный текст' },
                { className: 'desc_typography-h7', text: 'Основной текст' },
                { className: 'desc_typography-h8', text: 'Вспомогательный текст' },
            ]
        },
        phone: {
            nonEditable: [
                { className: 'typography', text: 'Заголовок H1, 32/40, bold' },
                { className: 'typography', text: 'Заголовок H2, 28/36, bold' },
                { className: 'typography', text: 'Заголовок H3, 20/28, medium' },
                { className: 'typography', text: 'Заголовок H4, 18/28, medium' },
                { className: 'typography', text: 'Лид P_Lead, 20/28, regular' },
                { className: 'typography', text: 'Крупный текст P_18, 18/28, regular' },
                { className: 'typography', text: 'Основной текст P_16, 16/24, regular' },
                { className: 'typography', text: 'Вспомогательный текст P_14, 14/20, regular' },
            ],
            editable: [
                { className: 'phone_typography-h1', text: 'Текст заголовка' },
                { className: 'phone_typography-h2', text: 'Текст заголовка' },
                { className: 'phone_typography-h3', text: 'Текст заголовка' },
                { className: 'phone_typography-h4', text: 'Текст заголовка' },
                { className: 'phone_typography-h5', text: 'Текст лида' },
                { className: 'phone_typography-h6', text: 'Крупный текст' },
                { className: 'phone_typography-h7', text: 'Основной текст' },
                { className: 'phone_typography-h8', text: 'Вспомогательный текст' },
            ]
        }
    };

    useEffect(() => {
        const activeButton = buttonsRef.current.find(button => button.classList.contains('active'));
        if (activeButton) {
            const { offsetLeft, offsetWidth } = activeButton;
            activeLineRef.current.style.width = `${offsetWidth}px`;
            activeLineRef.current.style.left = `${offsetLeft}px`;
        }
    }, [activeSelector]);

    const handleSelectorClick = (selector) => {
        setActiveSelector(selector);
    };

    return (
        <div className="typography-section">
            <section id="TypographySection">
                <h2>Типографика</h2>
                <h6>Используется шрифт Graphik. На телефонах стили типографики переопределяются</h6>
                <div className="selector">
                    <button
                        className={activeSelector === 'desktop' ? 'active' : ''}
                        onClick={() => handleSelectorClick('desktop')}
                        ref={el => buttonsRef.current[0] = el}
                    >
                        <p>Десктоп</p>
                    </button>
                    <button
                        className={activeSelector === 'phone' ? 'active' : ''}
                        onClick={() => handleSelectorClick('phone')}
                        ref={el => buttonsRef.current[1] = el}
                    >
                        <p>Телефон</p>
                    </button>
                    <div className="selector-line"></div>
                    <div className="selector-active-line" ref={activeLineRef}></div>
                </div>
                <div className="typography-list">
                    {Object.entries(typographyData[activeSelector]).map(([key, column], columnIndex) => (
                        <div className={`typography-column ${key}`} key={columnIndex}>
                            {column.map((item, index) => (
                                <div className="typography-item" key={index}>
                                    <div className={`typography-title ${item.className}`}>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TypographySection;
