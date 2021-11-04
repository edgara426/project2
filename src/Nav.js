import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-start">
        <a className="navbar-item" href="link">
          <Link to="/">Home</Link>
        </a>
        <a className="navbar-item" href="link">
          <Link to="/anime">Anime</Link>
        </a>
        <a className="navbar-item" href="link">
          <Link to="/norris">Norris</Link>
        </a>
      </div>
    </nav>
    
  )
}

export default Nav
