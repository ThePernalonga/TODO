import React, {useState} from 'react'
import TODOForm from './TODOForm'
import { RiCloseFill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'

function TODO({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({ id: null, value: '' })
  }

  if (edit.id) {
    return <TODOForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseFill onClick={() => removeTodo(todo.id, todo.text)} className='delete-icon' />
        <BiEdit onClick={() => setEdit({id : todo.id, value : todo.text})} className='edit-icon' />
      </div>
    </div>
  ));
}

export default TODO;