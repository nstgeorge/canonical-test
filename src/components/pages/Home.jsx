import React from 'react'
import useArticles from '../../hooks/useArticles'
import '../../styles/home.scss'
import Card from '../Card'

export default function Home(props) {
  const articles = useArticles()

  return (
    <div className='container'>
      <div className='articles'>
        {articles 
          ? articles.map((article) => {
            return (
              <Card key={article.id} {...article}>

              </Card>
            )
          })
          : 'Fetching data...'
        }
      </div>
    </div>
  )
}

