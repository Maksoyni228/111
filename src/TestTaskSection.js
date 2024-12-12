import React from 'react';

const TestTaskSection = () => {
    return (
        <section>
            <h2>Тестовое задание</h2>
            <h3>Уровень: Junior</h3>
            <p>Блок с текстом</p>
            <h3>Сетка</h3>
            <p>Задание</p>
            <h3>Desktop (1200+)</h3>
            <table>
                <thead>
                <tr>
                    <th>Количество</th>
                    <th>Колонок</th>
                    <th>Ширина колонки</th>
                    <th>Максимальное</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>12</td>
                    <td>12</td>
                    <td>60-80</td>
                    <td>32</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default TestTaskSection;