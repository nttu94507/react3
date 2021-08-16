const initState ={
  todoList : ['test1','第二件事'],
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default todoReducer;