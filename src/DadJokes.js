import React, { useEffect, useState } from 'react'
import Norris from './img/Norris.jpeg'
function Dad(props) {
  const [quote, setQuote] = useState({})

  const random = `https://api.chucknorris.io/jokes/random`
  const makeApiCall = async (random) => {
    const res = await fetch(random)
    const data = await res.json()
    setQuote(data)
    console.log(data)
  }
  useEffect(() => {
    props.setBackgroundImage(Norris)
    makeApiCall(random)
  }, [])

  const handleNewQuote = (e) => {
    e.preventDefault()
    makeApiCall(random)
  }

  return (
    <div className="Dad">
      {/* <div className="card">
        <div className="card-content">
          <div className="content">
            <p>{quote.value}</p>
            <button onClick={handleNewQuote}>
              <img src={quote.icon_url} alt="Norris"/>
            </button>
          </div>
        </div>
      </div> */}
      <div class="card">
        <div class="card-content">
          <p class="subtitle">{quote.value}</p>
        </div>
        <p class="buttons is-centered" onClick={handleNewQuote}>
          <button class="button is-large">
            <span class="icon is-large">
              <i class="fas fa-heading fa-2x">
                <img src={quote.icon_url} alt="Norris" />
              </i>
            </span>
          </button>
        </p>
      </div>
    </div>
  )
}

export default Dad
