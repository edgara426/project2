import React from 'react'

function Naruto2({ quote}) {
  return (
    <>
      <p className="title">{quote.anime}</p>
      <p className="subtitle">{quote.quote}</p>
      <p className="subtitle">~{quote.character}</p>
   </>
  )
}

export default Naruto2
