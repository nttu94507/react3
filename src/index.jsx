import React, { useState,useEffect} from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import styles from './index.scss'


const Main = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
   
    return()=>{
      console.log (`Componet 移除`);
    }
  });
   return(
  <>
  <h1 className={styles.main}>{count}</h1>
  <button type="button" onClick={()=>{setCount(count+1)}} >點我+1</button>
  </>
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
ReactDom.render(<TodoList names={[1,2,3]}/>, document.getElementById('root'));