import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Todo from './todo.js';
import TodoForm from './form';
import './styles.css';

const root = createRoot(document.getElementById('root'));


function App(){
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
    <div className='app'>
    <div className='todo-list'>
    
      {todos.map((todo, index) => 
        <Todo key={index} index={index}  todo={todo} remove={removeTodo}/>)}
      <TodoForm addTodo={addTodo} />
      </div>
      </div>
      </> );
}

root.render(<App />);