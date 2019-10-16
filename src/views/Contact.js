import React from 'react'
import { Text } from '../components/Text.js'
import s from './Contact.module.css'

const Contact = () => {
  return (
    <section>
      <Text>Here's my email. Drop me a message.</Text>
      <Email/>

      <Text>Here are my socials. DMs are open.</Text>
      <Socials/>

      <Text>This contact form also seems to be working fine.</Text>
      <Form/>
    </section>
  )
}

const Email = () => {
  const email = 'contact@rdjwsk.com'
  return (
    <a className={`${s.socialLink} ${s.email}`} rel='noopener noreferer' href={`mailto:${email}`}>
      {email}
    </a>
  )
}

const Socials = () => (
  <div className={s.socials}>
    <a className={s.socialLink} href="soundcloud.com" target='_blank' rel='noopener noreferer'>SoundCloud</a>
    <a className={s.socialLink} href="youtube.com" target='_blank' rel='noopener noreferer'>Youtube</a>
    <a className={s.socialLink} href="instagram.com" target='_blank' rel='noopener noreferer'>Instagram</a>
    <a className={s.socialLink} href="twitter.com" target='_blank' rel='noopener noreferer'>Twitter</a>
    <a className={s.socialLink} href="facebook.com" target='_blank' rel='noopener noreferer'>Facebook</a>
  </div>
)

const initForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Form = () => {
  const [ state, setState ] = React.useState(initForm)
  const [ sent, setSent ] = React.useState(true)
  const changeState = (f, v) => setState({
    ...state,
    [f]: v
  })
  const sendOnce = e => {
    if(!sent) {
      submitForm(e, state, setSent)
    } else {
      console.log('message already sent')
    }
  }
  return (
    <form onSubmit={e => sendOnce(e)} className={s.form}>
      <div className={s.formRow}>
        <Input
          changeState={changeState}
          name='name'
          type='text'
          placeholder='Name'
          required
        />

        <Input
          changeState={changeState}
          name='email'
          type='email'
          placeholder='Email'
          required
        />
      </div>

      <Input
        changeState={changeState}
        name='subject'
        type='text'
        placeholder='Subject'
        required
      />
      <textarea
        className={s.message}
        name="message"
        onChange={e => changeState('message', e.target.value)}
        placeholder='Message'
        required
      ></textarea>

      <button className={`${s.submit} ${sent ? s.sent : ''}`}>
        {sent ? 'Message sent' : 'Send message'}
      </button>
    </form>
  )
}

const Input = ({ changeState, ...props }) => {
  return (
    <input {...{
      ...props,
      className: s.input,
      onChange: e => changeState(props.name, e.target.value)
    }}/>
  )
}

const submitForm = async (e, state, setSent) => {
  console.log(state)
}

export default Contact