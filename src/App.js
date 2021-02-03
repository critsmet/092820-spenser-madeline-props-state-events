import React from 'react';
import './App.css';

import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends React.Component {

  state = {todos: []}

  retrieveValueFromChild = (value) => {
    // console.log("SHOULD BE BACK IN APP", this, "WITH THE VALUE FROM THE CHILD COMPONENT TODOFORM", value)
    this.setState({todos: [...this.state.todos, value]})
    // this.setState(function(pS){
    //   return {todos: [...pS, value]}
    // }))
  }

  render(){
    return(
      <div className="App">
        <TodoForm callback={this.retrieveValueFromChild} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}


export default App;
