import React from "react";



export const Input = ({ register, name, }) => {
    return <input {...register(name)} />;
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