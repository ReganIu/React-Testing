import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

// function App() {
//   const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

//   return (
//     <div className = "todo-list">
//       {todoItems}
//     </div>
//   )
// }


// class component
// class App extends React.Component {
//   render() {
//     const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

//     return (
//       <div className = "todo-list">
//         {todoItems}
//       </div>
//     )
//   }

//constructor method
//   constructor () {
//     super()
//     this.state = {
//       answer: 'Yes'
//     }
//   }
//   render() {
//     return ( 
//       <div> 
//         <h1> What is state? {this.state.answer} </h1>
//       </div>
//     )
//   }
// }


class App extends React.Component {
    constructor () {
      super()
      this.state = {
        todos: todosData
      }
    }
    render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item = {item}/>)
      
      return (
          <div className='todo-list'>
            {todoItems}
          </div>
        )
    }
}
export default App