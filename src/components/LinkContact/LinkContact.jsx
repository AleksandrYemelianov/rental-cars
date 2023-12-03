import css from './LinkContact.module.css';

export const LinkContact = ({number, text}) => {
  return (
      <a href={`tel:${number}`} className={css.linkContact}>{text}</a>
  )
}
