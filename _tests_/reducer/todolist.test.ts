import todoReducer from "../../src/reducer/todolist";
import { fetchDataSuccess } from "../../src/action/todolist";

describe('Todolist Reducer',()=>{
    test('TodoReducer_Action_FetchData_Success',()=>{
        const assertState = todoReducer({},fetchDataSuccess('test'),)
        expect(assertState).toEqual({data:'test',})
    })
})