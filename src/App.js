import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import SideNav from './components/SideNav.js'

import Projects from './views/Projects.js'
import About from './views/About.js'
import Contact from './views/Contact.js'
import { TopNav } from './components/Nav.js'


const App = ({ history }) => (
  <main className="App">
    <SideNav/>
    <Router/>
    <TopNavWrapper history={history}/>
  </main>
)

const TopNavWrapper = ({ history }) => {
  const current = history.location.pathname.split('/')[1]
  return <TopNav current={current}/>
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

export default withRouter(App)
