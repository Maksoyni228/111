const CheckboxRadioButton = () => {
    return (
        <div className="CheckboxRadioButton">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Чекбокс</label>
            <br />
            <input type="radio" id="radio1" name="radio" />
            <label htmlFor="radio1">Радиобаттон 1</label>
            <br />
            <input type="radio" id="radio2" name="radio" />
            <label htmlFor="radio2">Радиобаттон 2</label>
        </div>
    );
};

export default CheckboxRadioButton;