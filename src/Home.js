import React, { useEffect, useState } from 'react'
import Dad from './DadJokes'

function Home() {
  const [quote, setQuote] = useState({})

  // const randomQuote = useRef()

  const random = `https://favqs.com/api/qotd`
  const makeApiCall = async (random) => {
    const res = await fetch(random)
    const data = await res.json()
    setQuote(data.quote)

    // originally I had setQuote(data), but i would get an error when I .mapped it.
  }
  useEffect(() => {
    makeApiCall(random)
  }, [])

  console.log(quote)

  // const quoteDisplay = quote.map((quoteDay) => {
  //     return(
  //         <p>{quoteDay.quote}</p>
  //     )
  // })

  const handleNewQuote = (e) => {
    e.preventDefault()
    makeApiCall(random)
    // setNext(randomQuote)
  }

  return (
    <div className="Home">
      <div className="card">
        <div className="card-content">
          <div className="content">
            {/* <h1>Home Quote</h1> */}
            <p>{quote.body}</p>
            <p>{quote.author}</p>
            <button onClick={handleNewQuote}>
              <span>Next Quote</span>
            </button>
            {/* <Dad /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
