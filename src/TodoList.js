import React from 'react'

class TodoList extends React.Component{

  render(){
    return (
      <div id="todos-container">
        <h2>Todos Go Here</h2>
        <ul>
          {this.props.todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>
    )
  }
}

export default TodoList
