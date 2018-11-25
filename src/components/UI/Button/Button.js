import React from 'react';
import cls from './Button.css';
const button = (props) => (
    <button
        disabled={props.disabled}
        className={[cls.Button, cls[props.btnType]].join(" ")}
        onClick={props.clicked}>{props.children}</button>
);

export default button;