import React from 'react'
import { HuePicker } from 'react-color'
import { changeAccentColor } from '../helpers/changeAccentColor.js'

import g from './global.module.css'

const ChangeColor = () => {
  const [ show, setShow ] = React.useState(false)
  return(
    <div className={g.pickerWrapper}>
      {show
        ? <HuePicker
            onChange={e => changeAccentColor(e)}
            width={200}
            color={window.getComputedStyle(document.documentElement).getPropertyValue('--primary')}
          />
        : null}
      <button
        className={g.showPicker}
        onClick={e => setShow(!show)}
      >
        {show
          ? 'Confirm accent color'
          : 'Change accent color'}
      </button>
    </div>
  )
}

export default ChangeColor