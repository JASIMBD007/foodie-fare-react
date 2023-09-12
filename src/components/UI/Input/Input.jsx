import React, { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef(({ label, input }, ref) => {
    return (
        <div className='input'>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} {...input} />
        </div>
    );
});

Input.displayName = 'Input'; // Set the display name here

export default Input