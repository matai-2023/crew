import { Link } from 'react-router-dom'

function Logo() {
  const imagePath = process.env.PUBLIC_URL + '../public/logo.png'
  return (
    <Link to="/">
      <img src={imagePath} alt="Logo" className="w-16 h-16" />
    </Link>
  )
}

export default Logo
