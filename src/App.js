import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context"
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    // {id: 1, completed: false, title: 'buy bread'},
    // {id: 2, completed: false, title: 'buy cookies'},
    // {id: 3, completed: false, title: 'do hw'},
  ])
  //возвращает элемент из 2 массивов. 1ый само состояние, 2ое функция позволяющая изменять сотояние чтобы react видел изменения
  // let todos = [
  //   {id: 1, completed: false, title: 'buy bread'},
  //   {id: 2, completed: false, title: 'buy cookies'},
  //   {id: 3, completed: false, title: 'do hw'},
  // ]

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }) 
    )
    
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>To-do list</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>You're all done</p>}
        
      </div>
    </Context.Provider>
  )
}

export default App;
