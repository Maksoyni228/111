import React, { useState } from 'react';
import './CheckboxRadioButton.css';

function CheckboxRadioButton() {
    const [radioValue, setRadioValue] = useState('option3'); // Третий радиобаттон по умолчанию checked
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false, // Второй чекбокс с hover
        checkbox3: true,  // Третий чекбокс в состоянии checked
    });

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div>
            <div className="checkbox-radio-container">
                <div className="column">
                    <label>
                        <input
                            type="checkbox"
                            name="checkbox1"
                            checked={checkboxes.checkbox1}
                            onChange={handleCheckboxChange}
                        />
                        <h6 className="button_text">Выбери меня</h6>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="checkbox2"
                            checked={checkboxes.checkbox2}
                            onChange={handleCheckboxChange}
                            className="hover-checkbox" // Лочим hover стиль
                        />
                        <h6>Выбери меня</h6>
                    </label>
                    <label>
                    <input
                            type="checkbox"
                            name="checkbox3"
                            checked={checkboxes.checkbox3}
                            onChange={handleCheckboxChange}
                        />
                        <h6>Птица счастья завтрашнего дня</h6>
                    </label>
                </div>

                <div className="column">
                    <label>
                        <input
                            type="radio"
                            name="radio-group"
                            value="option1"
                            checked={radioValue === 'option1'}
                            onChange={handleRadioChange}
                        />
                        <h6 className="button_text">Пластмассовый мир победил</h6>
                    </label>
                    <label>
                    <input
                            type="radio"
                            name="radio-group"
                            value="option2"
                            checked={radioValue === 'option2'}
                            onChange={handleRadioChange}
                            className="hover-radio" // Лочим hover стиль
                        />
                        <h6>Макет оказался сильней</h6>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="radio-group"
                            value="option3"
                            checked={radioValue === 'option3'}
                            onChange={handleRadioChange}
                        />
                        <h6>Последний кораблик остыл</h6>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CheckboxRadioButton;
