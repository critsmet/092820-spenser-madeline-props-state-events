import React from 'react'


function TodoForm(propsObj){

  function submitTodo(e){
    e.preventDefault()
    let value = e.target.todo.value
    console.log("INSIDE OF TODO FORM");
    propsObj.callback(value)
    e.target.reset()
  }
  return (
    <div id="todo-form">
        <form onSubmit={submitTodo} id="search">
          <input name="todo" type="text" />
          <input type="submit" value="Add Todo!" />
        </form>
    </div>
  )
}

export default TodoForm
