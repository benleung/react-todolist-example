import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

let Counter = React.createClass({
  render: () => {
    return <h2>Hello World</h2>;
  }
})


  // */

render(
  //<Counter />
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
