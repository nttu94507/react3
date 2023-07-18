import React from "react";
import styles from './index.scss'

export const Input = ({ register, name, val}) => {
    return <input {...register(name)} placeholder={val} Value={val} />;
}

export const Textarea = ({ register, name, val}) => {
    return <textarea {...register(name)} placeholder={val} Value={val} />;
}

export const DateInput = ({ register, name}) => {
    return <input {...register(name)} type="datetime-local"  />;
}

export function Select({ register, options, name, select }) {
    return (
        <select {...register(name)} >
            {options.map((value) => {
                console.log(select)
                if (select == value.value) {
                    return <option value={value.value} selected>{value.opttionName}</option>
                } else {
                    return <option value={value.value} >{value.opttionName}</option>
                }
            })}
        </select>
    );
}