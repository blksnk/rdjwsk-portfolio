import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SideNav from './components/SideNav.js'
import ChangeColor from './components/ChangeColor.js'

import Projects from './views/Projects.js'
import About from './views/About.js'
import Contact from './views/Contact.js'

function App() {
  return (
    <main className="App">
      <SideNav/>
      <Router/>
      {<ChangeColor/>}
    </main>
  );
}

const Router = () => (
  <Switch>
    <Route path='/projects' component={Projects}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/' component={HomeRedirect}/>
  </Switch>
)

const HomeRedirect = ({ history }) => {
  React.useEffect(() => {
    history.push('/projects')
  })
  return null
}

export default App
