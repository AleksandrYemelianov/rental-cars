import React from 'react'
import css from './Button.module.css';

export const Button = ({ type = 'button', size, text }) => {
  let style = null
  if (size === 's') {
    style = css.ButtonS
  } else if (size === 'm') {
    style = css.ButtonM
  } else if (size === 'l') {
    style = css.ButtonL
  }

  return (
    <button type={type} className={`${css.Button} ${style}`}>{text}</button>
  )
}
