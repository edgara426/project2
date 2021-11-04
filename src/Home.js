import React, { useEffect, useState } from 'react'
import Dad from './DadJokes'
import Snow from './img/snow.svg'

function Home(props) {
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
    props.setBackgroundImage(Snow)
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
      {/* <div className="card">
        <div className="card-content">
          <div className="content">
           
            <p>{quote.body}</p>
            <p>{quote.author}</p>
            <button className="button is-link is-hovered is-rounded" onClick={handleNewQuote}>
              <span>Next Quote</span>
            </button>
            
          </div>
        </div>
      </div> */}
      <div class="card">
        <div class="card-content">
          <p class="subtitle">{quote.body}</p>
          <p class="subtitle">~{quote.author}</p>
        </div>

        <button
          className="button is-link is-hovered is-rounded is-centered"
          onClick={handleNewQuote}
        >
          <span>Next Quote</span>
        </button>
      </div>
    </div>
  )
}

export default Home
