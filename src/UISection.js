import React from 'react';
import TextField from './TextField';
import Dropdown from './Dropdown';
import Button from './Button';
import CheckboxRadioButton from './CheckboxRadioButton';
import Accordion from './Accordion';

const UISection = () => {
    return (
        <section>
            <h2>UI</h2>
            <h3>Текстовое поле</h3>
            <TextField />
            <h3>Выпадающий список</h3>
            <Dropdown />
            <h3>Кнопка</h3>
            <Button />
            <h3>Чекбокс, радиобаттон</h3>
            <CheckboxRadioButton />
            <h3>Аккордеон</h3>
            <Accordion />
        </section>
    );
};

export default UISection;