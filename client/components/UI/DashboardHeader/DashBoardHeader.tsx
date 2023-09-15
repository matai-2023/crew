import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Logo from '../Logo/Logo.tsx'
import Nav from '../Nav/Nav.tsx'

interface Props {
  toggleMenu: () => void
  showNav: boolean
}

function DashboardHeader(props: Props) {
  const [isArrowTouched, setIsArrowTouched] = useState(false)
  const [isLogoClicked, setIsLogoClicked] = useState(false)
  const navigate = useNavigate()
  const [navOpened, setNavOpened] = useState(false)

  const goBack = () => {
    navigate(-1)
  }

  function toggleMenu() {
    setNavOpened(() => !navOpened)
  }

  const handleArrowTouch = () => {
    setIsArrowTouched(true)

    setTimeout(() => {
      setIsArrowTouched(false)
      navigate(-1)
    }, 300)
  }

  const arrowScale = {
    touched: { scale: 1.2 },
    untouched: { scale: 1 },
  }

  const handleLogoClick = () => {
    console.log('Logo clicked')
    setIsLogoClicked(true)
    toggleMenu()
  }

  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <div
        className="absolute top-0 right-0 mt-3 mr-4"
        onClick={handleLogoClick}
      >
        <Logo toggleMenu={toggleMenu} />
      </div>
      <div className="mt-3 ml-4 p-3">
        <motion.button
          onClick={handleArrowTouch}
          initial="untouched"
          animate={isArrowTouched ? 'touched' : 'untouched'}
          variants={arrowScale}
        >
          <img src="../../public/Arrow.png" alt="Back" />
        </motion.button>
      </div>
      {isLogoClicked && (
        <div>
          <Nav toggleMenu={toggleMenu} showNav={props.showNav} />
        </div>
      )}
    </div>
  )
}

export default DashboardHeader
