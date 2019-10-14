import React from 'react'
import { PageTitle, Text } from '../components/Text.js'

import s from './Contact.module.css'

const Contact = () => {
  return (
    <section>
      <PageTitle>Contact</PageTitle>
      <Text>Got something to say to me?</Text>
      <Text>Feel free to drop me a message here or contact me via my socials.</Text>
      {/*<Socials/>*/}
      <Form/>
    </section>
  )
}

const initForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
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

const submitForm = async (e, state) => {
  console.log(state)
}

const Form = () => {
  const [ state, setState ] = React.useState(initForm)
  const changeState = (f, v) => setState({
    ...state,
    [f]: v
  })
  return (
    <form onSubmit={e => submitForm(e, state)} className={s.form}>
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

      <button className={s.submit}>
        Send message
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

export default Contact