import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.css";
import App from "./components/App";
import { createStore } from 'redux';
import Todos from "./components/todos/Todos";
import { Provider } from 'react-redux'
import rootReducer from './components/todos/rootReducer'
  // ========================================


ReactDOM.render(<App />, document.getElementById("cross"));

// const store = createStore(counter)
// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   document.getElementById("counter")
// )
// render()
// store.subscribe(render)

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}>
  <Todos />
</Provider>, document.getElementById("todos"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
