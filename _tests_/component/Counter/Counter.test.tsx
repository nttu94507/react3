import '@testing-library/jest-dom'
import React from "react";
import { render,fireEvent} from "@testing-library/react";
// import { toBeInTheDocument } from "@testing-library/jest-dom";
import Counter from "../../../src/component/Counter";


describe(Counter,()=>{
    test('Counter_Click_AddCount',()=>{
        const{ getByTestId } = render(<Counter />);
        expect(getByTestId('counter').textContent).toBe('0')
        const addCountBtn = getByTestId('addCountBtn')
        fireEvent.click(addCountBtn);
        expect(getByTestId('counter').textContent).toBe('1')
    })
})