import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from 'store'
import { Provider } from 'react-redux'
import Portal from 'components/alerts/portal'
import Alerts from 'components/alerts/alerts'
import alertService from 'services/alerts.service'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Portal id="alerts">
        <Alerts className="fixed"/>
      </Portal>
    </Provider>
    <div id='alerts' className="fixed top-0 right-0"/>

  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
