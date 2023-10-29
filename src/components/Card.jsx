import { Card as VanillaCard } from '@canonical/react-components'
import PropTypes from 'prop-types'
import '../styles/card.scss'

export default function Card({ title, link, imgSrc, authorName, authorLink, date, topic, type='Article', ...others }) {

  return (
    <VanillaCard highlighted className='card' {...others}>
      <div className='accent-line' />
      <small className='topic'>{topic}</small>
      <hr className='dotted' />
      <div className='content-container'>
        <img src={imgSrc} className='p-card__image image' height='167' width='298' />
        <a href={link} className='p-heading--4'>{title}</a>
        <div className='p-heading--6 author-line'>By <a href={authorLink}>{authorName}</a> on {date}</div>
      </div>
      <hr className='dotted' />
      <small className='article-label'>{type}</small>
    </VanillaCard>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  imgSrc: PropTypes.string,
  authorName: PropTypes.string,
  authorLink: PropTypes.string,
  date: PropTypes.string,
  topic: PropTypes.string,
  type: PropTypes.string
}
