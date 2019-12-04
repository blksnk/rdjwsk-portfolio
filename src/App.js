import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import SideNav from './components/SideNav.js'

import Projects from './views/Projects.js'
import About from './views/About.js'
import Contact from './views/Contact.js'
import { TopNav } from './components/Nav.js'
import ScrollIcon from './components/ScrollIcon.js'


const App = ({ history }) => (
  <main className="App">
    <div className='transition-overlay'></div>
    <SideNav/>
    <Router/>
    <TopNavWrapper history={history}/>
    {/*<ScrollIcon/>*/}
  </main>
)

const TopNavWrapper = ({ history }) => {
  const current = history.location.pathname.split('/')[1]
  return <TopNav history={history} current={current}/>
}

const Router = () => (
  <Switch>
    <Route path='/audio' component={Projects}/>
    <Route path='/video' render={(props) => <Projects {...props} isVideo={true}/>}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/' component={HomeRedirect}/>
  </Switch>
)

const HomeRedirect = ({ history }) => {
  React.useEffect(() => {
    history.push('/audio')
  })
  return null
}

export default withRouter(App)
