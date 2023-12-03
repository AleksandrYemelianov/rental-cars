import React from 'react'
import css from './Button.module.css';

export const Button = ({ type = 'button', onClick, size, text }) => {
  let style = null
  if (size === 's') {
    style = css.ButtonS
  } else if (size === 'm') {
    style = css.ButtonM
  } else if (size === 'l') {
    style = css.ButtonL
  } else if (size === 'link') {
    style = css.ButtonLink
  }

  return (
    <button type={type} onClick={onClick} className={`${css.Button} ${style}`}>{text}</button>
  )
}
