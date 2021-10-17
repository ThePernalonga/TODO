import React, {useState, useEffect, useRef} from 'react';

function TODOForm(props) {
  
  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => { setInput(e.target.value); }
  
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), 
      text: input
    }) 
    setInput(''); 
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input className="todo-input" 
      name='text' type='text' 
      placeholder="Adicione uma tarefa" 
      value={input} 
      onChange={handleChange}
      ref={inputRef}
      />
      <button className="todo-button">+</button>
    </form>
  );
}

export default TODOForm