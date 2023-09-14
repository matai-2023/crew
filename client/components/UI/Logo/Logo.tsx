import { Link } from 'react-router-dom'

function Logo() {
  const imagePath = '../../public/logo.png'
  return (
    <Link to="/">
      <div className="p-3">
        <img
          src={imagePath}
          alt="Logo"
          className="w-auto h-auto max-h-16 max-w-16"
        />
      </div>
    </Link>
  )
}

export default Logo
