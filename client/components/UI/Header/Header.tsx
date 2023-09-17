import { Link } from 'react-router-dom'

function Header() {
  const imagePath = '../../public/logo.png'

  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <Link to="/" className="absolute top-0 right-0 mt-3 mr-4">
        <div className="p-3">
          <img
            src={imagePath}
            alt="Logo"
            className="w-auto h-auto max-h-16 max-w-16"
          />
        </div>
      </Link>
    </div>
  )
}

export default Header
