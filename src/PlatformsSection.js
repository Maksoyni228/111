import React from 'react';

const PlatformsSection = () => {
    return (
        <section>
            <h2>Платформы</h2>
            <h3>Планшет (736+)</h3>
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
                    <td>8</td>
                    <td>8</td>
                    <td>56-88</td>
                    <td>32</td>
                </tr>
                </tbody>
            </table>
            <h3>Телефон (320+)</h3>
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
                    <td>4</td>
                    <td>4</td>
                    <td>56-88</td>
                    <td>24</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default PlatformsSection;