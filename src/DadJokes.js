import React, { useEffect,useState } from 'react'

function Dad() {
  const [quote, setQuote] = useState({})

 

  const random = `https://api.chucknorris.io/jokes/random`
  const makeApiCall = async (random) => {
    const res = await fetch(random)
    const data = await res.json()
    setQuote(data)
    console.log(data)

  }
  useEffect(() => {
    makeApiCall(random)
  }, [])

  

  const handleNewQuote = (e) => {
    e.preventDefault()
    makeApiCall(random)
    
  }

  return (
    <div className="Home">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>{quote.value}</p>
            <button onClick={handleNewQuote}>
              <span>Next Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

  export default Dad
  