// import { useEffect, useState } from 'react'

// function Naruto() {
//   const [quoteAnime, setQuoteAnime] = useState([])

//   const anime = `https://animechan.vercel.app/api/quotes/anime?title=naruto`
//   const makeApiCall = async (anime) => {
//     const res = await fetch(anime)
//     const data = await res.json()
//     // console.log(data)
//     setQuoteAnime(data)
//   }
//   useEffect(() => {
//     makeApiCall(anime)
//   }, [])

//   //   console.log(quoteAnime)

//   const animeHtml = quoteAnime.map((text) => {
//     console.log('quoteAnime is ', quoteAnime)

//     return (
//       <>
//         <p>{text.anime}</p>
//         <p>{text.quote}</p>
//         <p>{text.character} </p>
//       </>
//     )
//   })
// //   let i = 0
// //   const max = setQuoteAnime.length;
// //   for (i; i< max; i += 1) {
// //       if(setQuoteAnime[i]){
// //           return setQuoteAnime[i + 1];
// //       }
// //   }
// //   setQuoteAnime(setQuoteAnime.length)

//   //   console.log(animeHtml)

//   return (
//     <div className="Naruto">
//       <h1>Naruto</h1>
//       {animeHtml[0]}
//     </div>
//   )
// }
// export default Naruto

import React, { useEffect, useState } from 'react'
import Naruto2 from './Naruto2'
import AnimeBackground from './img/anime.jpeg'
function Naruto(props) {
  const [quote, setQuote] = useState({})

  const random = `https://animechan.vercel.app/api/random`
  const makeApiCall = async (random) => {
    const res = await fetch(random)
    const data = await res.json()
    setQuote(data)
    console.log(data)
  }
  useEffect(() => {
    props.setBackgroundImage(AnimeBackground)
    makeApiCall(random)
  }, [])

  console.log(quote)

  const handleNewQuote = (e) => {
    e.preventDefault()
    makeApiCall(random)
  }

  return (
    <div className="Anime">
      <div class="card">
        <div class="card-content">
          <Naruto2 anime={quote} quote={quote} character={quote} />
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

export default Naruto
