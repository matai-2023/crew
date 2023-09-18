function Logo() {
  const imagePath = '../../public/logo.png'

  return (
    <button className="p-3">
      <img
        src={imagePath}
        alt="Logo"
        className="w-auto h-auto max-h-16 max-w-16"
      />
    </button>
  )
}

export default Logo
