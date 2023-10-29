import useArticles from '../../hooks/useArticles'
import '../../styles/home.scss'
import Card from '../Card'

export default function Home({ ...others }) {
  const articles = useArticles()

  return (
    <div className='container' {...others}>
      <div className='articles'>
        {articles 
          ? articles.map((article) => {
            return (
              <Card key={article.id} {...article} />
            )
          })
          : 'Fetching data...'
        }
      </div>
    </div>
  )
}

