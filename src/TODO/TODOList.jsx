import React, { useState } from 'react'
import TODOForm from './TODOForm'
import TODO from './TODO'

function TODOList() {

  const [todos, setTodos] = useState([])

  const addTodo = todo => { 
    if(!todo.text || /^\s*$/.test(todo.text)){ return } 
    const newTodos = [todo, ...todos]
    
    setTodos(newTodos)
    console.log(...todos);
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){ return }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = (id, text) => {
    const deleteIt = window.confirm(
      `A tarefa "${text}" será deletada!`
    );
    if (deleteIt) {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){ todo.isComplete = !todo.isComplete }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return(
    <div>
      <h1>O que temos pra hoje?</h1>
      <TODOForm onSubmit={addTodo} />
      <TODO 
      todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo}/>
    </div>
  );
}

export default TODOList;