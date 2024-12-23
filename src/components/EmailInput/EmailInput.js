import React, { useState } from 'react';
import './EmailInput.css';

function EmailInput({ placeholder, value, label, errorMessage, type, locked }) {
    const [inputValue, setInputValue] = useState(value || ''); // Состояние для значения ввода
    const [error, setError] = useState(errorMessage || ''); // Состояние для ошибки

    const inputClasses = `email-input ${type || ''} ${locked ? 'locked' : ''}`;

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue); // Обновляем состояние значения

        // Проверка на корректность ввода email
        if (newValue && !/\S+@\S+\.\S+/.test(newValue)) {
            setError('Неверный формат email');
        } else {
            setError('');
        }
    }

    return (
        <div className={inputClasses}>
            {label && <span className="input-label">{label}</span>}
            <input
                type="email" // Используем тип email для валидации
                placeholder={placeholder || "E-mail"}
                value={inputValue}
                onChange={handleChange} // Обработчик изменения
                readOnly={locked}
                className={error ? 'error' : ''} // Добавляем класс 'error' если есть ошибка
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default EmailInput;
