import { useEffect, useState } from "react"

/**
 * This hook provides the raw API interface with the posts "endpoint".
 * `useArticles` provides a cleaner interface to the components.
 */

const apiUrl = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'

export default () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        setData(await (await fetch(apiUrl)).json())
      } catch (e) {
        console.error(`There was an error fetching data: ${e}`)
      }
    }

    getData()
  }, [setData])

  return data
}