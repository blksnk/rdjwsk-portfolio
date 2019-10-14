import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './stylsheets/root.css'
import './stylsheets/fonts.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister()
