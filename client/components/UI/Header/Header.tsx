import { Link } from 'react-router-dom'
import Logo from '../Nav/Nav.tsx'

function Header() {
  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <p>I am the external header</p>
      <Link to="/" className="absolute top-0 right-0 mt-3 mr-4">
        <Logo />
      </Link>
    </div>
  )
}

export default Header
