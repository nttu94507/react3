import React, { useState, createContext, useContext} from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import styles from './index.scss'

const TodoListContext = createContext();

const Main = () => {
  const[todoList]= useState(['first', 'second'])
   return(
  <TodoListContext.Provider value={todoList}>
    <div>
      <span> {`代辦事項:${todoList.length}`}</span>
      <TodoListPage />
      <CurrentTask />
    </div>
  </TodoListContext.Provider>
  )
}

const CurrentTask =() =>{
  const todoList = useContext(TodoListContext)
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
  const [todoList] = useState(['first','second'])
  return todoList.map(task=>(
    <Task key={task} task = {task} />
  ))
}
ReactDom.render(<Main names={[1,2,3]}/>, document.getElementById('root'));