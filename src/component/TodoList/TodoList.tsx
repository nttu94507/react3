import React ,{useState}from 'react' 
import { useSelector,useDispatch } from 'react-redux'
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { addTodo, fetchDataBegin } from '../../action/todolist';


const Todo_List = () =>{
    // const [todoList] = useState(['first','second'])
    const todoList = useSelector(state => state.todoList)
    return todoList.map(task=>(
      <ul key={task}>
        <Task  task = {task} />
      </ul>
    ))
  }

  const TodoListPage =()=>{

    return(
    <div>
       <Todo_List />
     </div>
    )
   }

   const Task =(props) =>{
    const {task} = props
    return (<li>
                <Link to={`/list/${task}`}>{task}</Link>
            </li>
      )  }
  
  Task.propTypes = {
    task:PropTypes.string,
  }
  
  Task.defaultProps = {
    task: '',
  }

  const CurrentTask =() =>{
    // const todoList = useContext(TodoListContext)
    const todoList = useSelector(state => state.todoList)
    return <div>{`下一件事要做:${todoList[0]}`}</div>
  }
  

  const Main = () => {
    const dispatch = useDispatch();
    const todoList= useSelector(state =>state.todoList)
    const [newTodo,setNewTodo] = useState('') 
     return(
    <div data-testid="todolistBlock">
        <span>{`代辦事項數: ${todoList.length}`}</span>
        <div>
          <input value={newTodo}  onChange={(e)=>{ setNewTodo (e.target.value) }}/>
          <button type="button" onClick={()=>{dispatch(addTodo(newTodo))}}>新增待辦事項</button>
        </div>
        <CurrentTask />
        <TodoListPage />
    </div>
    )
  }

export default Main