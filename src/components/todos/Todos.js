import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import UndoRedo from "./UndoRedo";

const Todos = () => (
  <div>
      <h3>Todos</h3>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
)

export default Todos
