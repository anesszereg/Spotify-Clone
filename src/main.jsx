import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { DataLayer } from './js/DataLayer'
import reducer, { initialState } from './js/reducer'
//import {reducer} from './js/reducer'


ReactDOM.render(
  <React.StrictMode>
    <DataLayer
    initialState={initialState } reducer={reducer} >
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
)
