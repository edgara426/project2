import { Route, Link } from 'react-router-dom'
import './app.css'
import Home from './Home'
import Naruto from './Naruto'
import Nav from './Nav'
import Dad from './DadJokes'
import { useState } from 'react'
import backgroundDefault from './img/snow.svg'


function App() {
  const [backgroundImage, setBackgroundImage] = useState(backgroundDefault)

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div className="App">
        <Nav />
        <div className="content is-vcentered">
          <Route exact path="/" render={() => <Home backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage}/> } />
          <Route exact path="/anime" render={() => <Naruto backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage}/> } />
          <Route exact path="/norris" render={() => <Dad backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage}/> } />
        </div>
      </div>
    </div>
  )
}

export default App
