import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import SideNav from './components/SideNav.js'
import { Audio, Video } from './views/Projects.js'
import About from './views/About.js'
import Contact from './views/Contact.js'
import { TopNav } from './components/Nav.js'

import sasuke from './assets/images/sasuke.gif'

import wave from './assets/images/loop.webm'

const App = ({ history }) => {

  return (
  <main className="App">
    <div id='app-background'>
      <video id='app-background-video' src={wave} autoPlay loop muted></video>
    </div>
    <Transition/>
    <SideNav/>
    <Router/>
    <TopNavWrapper history={history}/>
    {/*<ScrollIcon/>*/}
  </main>
)}

const Transition = () => <div className='transition-overlay'><img src={sasuke} alt=""/></div>

const TopNavWrapper = ({ history }) => {
  const current = history.location.pathname.split('/')[1]
  return <TopNav history={history} current={current}/>
}

const Router = () => (
  <Switch>
    <Route path='/audio' component={Audio}/>
    <Route path='/video' component={Video}/>
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
