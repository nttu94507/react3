import * as actions from '../action/todolist'

const initState ={
  todoList : ['test1','第二件事'],
}

interface ItodoReducer {

}

const todoReducer: ItodoReducer = (state = initState, action:any) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return {
                ...state,
            todoList:[
                ...state.todoList,
            action.payload.todo,
        ],
        }
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
            data: action.payload.data,
      };
        default:
            return state;
    }
    
  };
  
  export default todoReducer;