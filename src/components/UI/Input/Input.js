import React from 'react';

import cls from './Input.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [cls.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(cls.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (<select
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} >
                {props.elementConfig.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                ))}
            </select>);
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
    }
    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }

    return (
        <div className={cls.Input}>
            <label className={cls.Label}> {props.Label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

export default Input;