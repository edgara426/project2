import { Route, Link } from 'react-router-dom'
import './app.css'
import Home from './Home'
import Naruto from './Naruto'
import Nav from './Nav'
import Dad from './DadJokes'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content is-vcentered">
        <Route exact path="/" component={Home} />
        <Route exact path="/anime" component={Naruto} />
        <Route exact path="/norris" component={Dad} />
      </div>
    </div>
  )
}

export default App
