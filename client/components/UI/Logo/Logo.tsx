interface Props {
  toggleMenu: () => void
}

function Logo(props: Props) {
  const { toggleMenu } = props
  const imagePath = '../../public/logo.png'

  return (
    <div className="p-3" onClick={toggleMenu}>
      <img
        src={imagePath}
        alt="Logo"
        className="w-auto h-auto max-h-16 max-w-16"
      />
    </div>
  )
}

export default Logo
