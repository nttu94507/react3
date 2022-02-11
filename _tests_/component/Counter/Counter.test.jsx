import '@testing-library/jest-dom'
import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Counter from "../../../src/component/Counter";


describe(Counter,()=>{
    test('Counter_Click_AddCount',()=>{
        const{ getByTestId } = render(<Counter />);
        expect (getByTestId('counterBlock')).toBeInTheDocument();
    })
})