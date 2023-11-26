// user input - includes validation
import React, {useState} from 'react';
import './styles.css';

function TodoForm({addTodo}){
  const [value,setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();

    if(!value.trim()){

      return;
    } 
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  );
}

export default TodoForm;