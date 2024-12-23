import React, { useState } from 'react';
import './Accordion.css';

// Компонент для обработки текста с переносами строк
const TextWithLineBreaks = ({ text }) => {
    return (
        <div>
            {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Третий аккордеон выбран по умолчанию
    const [hoverIndex, setHoverIndex] = useState(1); // Второй аккордеон в состоянии hover по умолчанию

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        { title: 'Аккордеон', content:
                'Гоpдость полными вагонами золотыми погонами\n' +
                'С юга дyют молодые вет…\n' +
                'Pазpывая в клочья облака не забыли шлют из далека\n' +
                'С дома мама И не последняя любовь\n' +
                'А по небy бегyт видишь чьи-то следы\n' +
                'Это может быть ты это может быть я\n' +
                'Это может наш дрyг\n' +
                'Это может нам поют свои'
        },
        { title: 'Аккордеон', content:
                'Гоpдость полными вагонами золотыми погонами\n' +
                'С юга дyют молодые вет…\n' +
                'Pазpывая в клочья облака не забыли шлют из далека\n' +
                'С дома мама И не последняя любовь\n' +
                'А по небy бегyт видишь чьи-то следы\n' +
                'Это может быть ты это может быть я\n' +
                'Это может наш дрyг\n' +
                'Это может нам поют свои'
        },
        { title: 'Аккордеон', content:
                'Гоpдость полными вагонами золотыми погонами\n' +
                'С юга дyют молодые вет…\n' +
                'Pазpывая в клочья облака не забыли шлют из далека\n' +
                'С дома мама И не последняя любовь\n' +
                'А по небy бегyт видишь чьи-то следы\n' +
                'Это может быть ты это может быть я\n' +
                'Это может наш дрyг\n' +
                'Это может нам поют свои'
        },
    ];

    return (
        <div className="accordion-container">
            {accordionData.map((item, index) => (
                <div
                    key={index}
                    className={`accordion ${activeIndex === index ? 'selected' : ''} ${hoverIndex === index || index === 1 ? 'hover' : ''}`}
                    onClick={() => toggleAccordion(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div className="accordion-header">
                        <span>{item.title}</span>
                        <span className={`arrow ${activeIndex === index ? 'open' : ''}`} />
                    </div>
                    <div
                        className="accordion-content"
                        style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
                    >
                        <TextWithLineBreaks text={item.content} /> {/* Использование компонента для текста с переносами строк */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
