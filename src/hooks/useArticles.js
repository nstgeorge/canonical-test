import { useEffect, useState } from "react"
import useAPI from "./useAPI"

// This hook cleans up the article data into a more digestible format for the React components.

export default () => {
  const data = useAPI()
  const [articles, setArticles] = useState() 

  useEffect(() => {
    if (data) {
      setArticles(data.map((article) => {
        const topic = article._embedded['wp:term'].find(term => term[0]?.id === article.topic[0])[0]?.name ?? 'No Topic' // Grabs topic by searching WP terms for the topic ID
        const date = new Date(article.date)
        return {
          id: article.id,
          title: article.title.rendered,
          link: article.link,
          date: `${date.getDay()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`,
          imgSrc: article.featured_media,
          authorName: article._embedded.author[0].name,
          authorLink: article._embedded.author[0].link,
          topic
        }
      }))
    }
  }, [data, setArticles])

  return articles

}