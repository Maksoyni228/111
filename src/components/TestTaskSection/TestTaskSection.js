// src/components/TestTaskSection.js
import React from 'react';
import './TestTaskSection.css';  // Подключение стилей

function TestTaskSection() {
    return (
        <div className="test-task-section">
            <section id="TestTaskSection">
                <h1>Тестовое задание</h1>
                <h5>Уровень: junior</h5>
                <div className="task-description">
                    <h6>Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку.
                        В шапке страницы укажи своё ФИО, так всем будет удобнее.
                    В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну что, поехали?</h6>
                </div>
            </section>
        </div>
);
}

export default TestTaskSection;
