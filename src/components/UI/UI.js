import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import EmailInput from "../EmailInput/EmailInput";
import Button from "../Button/Button";
import CheckboxRadioButton from "../CheckboxRadioButton/CheckboxRadioButton";
import Accordion from "../Accordion/Accordion";
import './UI.css';

function UI() {
    const dropdownOptions = [
        <h6>Первый стул</h6>,
        <h6>Второй стул</h6>,
        <h6>Третий стул</h6>,
        <h6>Теорема Эскобара</h6>
    ];

    return (
        <div className="ui">
            <section id="UI">
                <h2>UI</h2>

                {/* Email Input Fields */}
                <h3>Текстовое поле</h3>
                <div className="email-inputs-container">
                    <EmailInput placeholder="E-mail "/>
                    <EmailInput placeholder="E-mail " type="hover-locked" label="Ховер"/>
                    <EmailInput placeholder="E-mail " type="focus-locked" label="Ввод" value="example@email.com"/>
                    <EmailInput placeholder="E-mail " type="error-locked" label="Ошибка" value="invalid-email" errorMessage="Неверный формат email"/>
                </div>

                {/* Dropdown Component */}
                <h3>Выпадающий список</h3>
                <h6>Компонент состоит из текстового поля и выпадающей подсказки</h6>

                <div className="dropdown-container">
                    {/* Первый список */}
                    <Dropdown
                        placeholder="Выберите что-нибудь"
                        options={dropdownOptions}
                        className="first-dropdown"
                        index={0}
                    />

                    {/* Второй список - фиксированная нижняя граница */}
                    <Dropdown
                        placeholder="Выберите что-нибудь"
                        hoveredIndex={1}
                        locked
                        index={1}
                        type="hover-locked"
                    />

                    {/* Третий список - всегда открыт */}
                    <Dropdown
                        placeholder="Выбранный пункт"
                        options={dropdownOptions}
                        isOpen={true}
                        alwaysOpen={true}
                        selectedIndex={2}
                        hoveredIndex={3}
                        index={2}
                    />
                </div>

                {/* Buttons Section */}
                <h3>Кнопка</h3>
                <div className="buttons-container">
                    <div className="row">
                        <div className="button-group no-label">
                            <h5 className="button-label"></h5>
                            <Button label="Отправить" className="active"/>
                        </div>
                        <div className="button-group">
                            <h5 className="button-label">Ховер</h5>
                            <Button label="Отправить" className="hovered" disabled/>
                        </div>
                        <div className="button-group">
                            <h5 className="button-label">Нажатие</h5>
                            <Button label="Отправить" className="pressed" disabled/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="button-group">
                            <h5 className="button-label">Неактивна</h5>
                            <Button label="Отправить" className="disabled" disabled/>
                        </div>
                    </div>
                </div>

                {/* Checkbox and Radio Buttons */}
                <h3>Чекбокс, радиобаттон</h3>
                <CheckboxRadioButton/>

                {/* Accordion */}
                <h3>Аккордеон</h3>
                <Accordion/>
            </section>
        </div>
    );
}

export default UI;
