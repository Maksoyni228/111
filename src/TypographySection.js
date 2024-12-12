import React from 'react';

const TypographySection = () => {
    return (
        <section>
            <h2>Типографика</h2>
            <table>
                <thead>
                <tr>
                    <th>Дисконт</th>
                    <th>Телефон</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Заголовок H1, 48/65 bold</td>
                    <td>Заголовок H1, 30/42 bold</td>
                </tr>
                <tr>
                    <td>Заголовок H2, 32/42 bold</td>
                    <td>Заголовок H2, 20/30 bold</td>
                </tr>
                <tr>
                    <td>Заголовок H3, 20/30 medium</td>
                    <td>Заголовок H3, 16/24 medium</td>
                </tr>
                <tr>
                    <td>Заголовок H4, 16/24 medium</td>
                    <td>Заголовок H4, 14/20 medium</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default TypographySection;