/* eslint-disable no-unused-vars */

import Input from "./components/Input"
import TodoFilter from "./components/TodoFilter"
import TodoRenderer from "./components/todoRenderer"

function App() {

  return (
    <div>
      <h1>TODO</h1>
      <Input />
      <TodoFilter />
      <TodoRenderer />
    </div>
  )
}


export default App
