import React, { useState, createContext, useContext} from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import styles from './index.scss'
import { Provider,useSelector,useDispatch } from 'react-redux';
import store from './store';
import { addTodo } from './action/todolist';

const TodoListContext = createContext();

const Main = () => {
  const dispatch = useDispatch();
  const todoList= useSelector(state =>state.todoList)
  const [newTodo,setNewTodo] = useState('') 
   return(
  <div>
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

const CurrentTask =() =>{
  // const todoList = useContext(TodoListContext)
  const todoList = useSelector(state => state.todoList)
  return <div>{`下一件事要做:${todoList[0]}`}</div>
}

const TodoListPage =()=>{

 return(
 <div>
    <TodoList />
  </div>
 )
}
const SayHello = (props) => {
  const {names} = props
  const isEmpty = value => value === '';

  return(
    <div 
      className={styles.mainBackground}
      style={{fontSize: 28}}
    >
      {names.map(name=>(
        <div 
        key={name}
         className={isEmpty(name)? '': styles.main}>
          {`Hello ${isEmpty(name) ? 'Word' : name}`}
        </div>
       ))}
    </div>
  )
}

  SayHello.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
  };

  SayHello.defaultProps = {
    names: ['Default string'],
  };

const Hello =(props)=>{
  const {name} = props;
  return <div>{name}</div>;
}

const Task =(props) =>{
  const {task} = props
  return <div>{task}</div>
}

Task.propTypes = {
  task:PropTypes.string,
}

Task.defaultProps = {
  task: '',
}

const TodoList = () =>{
  // const [todoList] = useState(['first','second'])
  const todoList = useSelector(state => state.todoList)
  return todoList.map(task=>(
    <ul key={task}>
      <Task  task = {task} />
    </ul>
  ))
}
ReactDom.render(<Provider store = {store}> <Main names={[1,2,3]}/></Provider> , document.getElementById('root'));