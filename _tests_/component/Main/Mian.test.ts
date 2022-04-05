import React from "react";
import * as ReactRedux from 'react-redux';
import { createStore } from "redux";
import { render,fireEvent, queryByTestId } from "@testing-library/react";
import {toBeIntheDocument} from "@testing-library/jest-dom";
import reducer from '../../../src/reducer/todolist';
import Main from "../../../src/component/Main";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
// import TodoList from "../../../src/component/TodoList";
// import ProbeList from "../../../src/component/ProbeList";


const { Provider } = ReactRedux;

const generateComponent = (component,initState)=>{
    const store = createStore(reducer,initState);
    const history = createMemoryHistory();
    return render(
        <Provider store={store}>
            <Router history={history}>
                {component}
            </Router>
        </Provider>
    )
}

describe('Main',()=>{
    test('Main_ClickTodoListLink_RenderTodoList',()=>{
        const {getByTestId,queryByTestId} = generateComponent(<Main />);
        const probelistLink = getByTestId('probelistLink');
        fireEvent.click(probelistLink);
        expect(getByTestId('probelistLink')).toBeInTheDocument();
    })
})