import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

function Dropdown({
                      index,
                      placeholder,
                      options = [],
                      locked,
                      isOpen,
                      alwaysOpen,
                      selectedIndex,
                      hoveredIndex,
                      className,
                      type // Новый пропс для hover-locked
                  }) {
    const [open, setOpen] = useState(isOpen || false);
    const [selected, setSelected] = useState(selectedIndex || null);
    const [hovered, setHovered] = useState(hoveredIndex || null);
    const [isHovered, setIsHovered] = useState(false); // Состояние для hover

    const toggleDropdown = useCallback(() => {
        if (!locked && !alwaysOpen) {
            setOpen(prev => !prev);
        }
    }, [locked, alwaysOpen]);

    const handleSelect = useCallback((index) => {
        setSelected(index);
        if (!alwaysOpen) {
            setOpen(false);
        }
    }, [alwaysOpen]);

    const handleMouseEnter = useCallback((index) => {
        if (type === 'hover-locked') {
            setIsHovered(true); // Блокируем hover
        } else {
            setHovered(index);
            setIsHovered(true); // Если первый элемент, устанавливаем hover
        }
    }, [type]);

    const handleMouseLeave = useCallback(() => {
        if (type !== 'hover-locked') {
            setHovered(null);
            setIsHovered(false); // Сбрасываем hover
        }
    }, [type]);

    const borderBottomColor = selected !== null || isHovered ? '#3E29E3' : '#AEADAE';

    // Вычисляем текст placeholder: если выбран элемент, показываем его текст, иначе — исходный placeholder
    const displayText = selected !== null && options[selected] ? options[selected].props.children : placeholder;

    return (
        <div className={`dropdown ${className} ${open ? 'open' : ''}`} onClick={toggleDropdown}>
            <input
                type="text"
                readOnly
                placeholder=""  // Убираем стандартный placeholder
                value={displayText}  // Показываем выбранный текст
                style={{
                    borderBottomColor,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            />
            <ul className={`dropdown-list ${open ? 'show' : ''}`}>
                {options.map((option, idx) => (
                    <li
                        key={idx}
                        className={`dropdown-item ${idx === selected ? 'selected' : ''} ${idx === hovered ? 'hovered' : ''}`}
                        onClick={() => handleSelect(idx)}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {option.props.children}
                    </li>
                ))}
            </ul>
        </div>
    );
}


Dropdown.propTypes = {
    index: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.node),
    locked: PropTypes.bool,
    isOpen: PropTypes.bool,
    alwaysOpen: PropTypes.bool,
    selectedIndex: PropTypes.number,
    hoveredIndex: PropTypes.number,
    className: PropTypes.string,
    type: PropTypes.string, // Новый пропс для определения типа
};

Dropdown.defaultProps = {
    placeholder: 'Выберите элемент',
    options: [],
    locked: false,
    isOpen: false,
    alwaysOpen: false,
    selectedIndex: null,
    hoveredIndex: null,
    className: '',
    type: '',
};

export default Dropdown;
