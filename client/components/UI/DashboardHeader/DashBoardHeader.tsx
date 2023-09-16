import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IfAuthenticated } from '../../Authenticated.tsx'
import Button from '../Button/Button.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import Logo from '../Logo/Logo.tsx'
import Nav from '../Nav/Nav.tsx'

function DashboardHeader() {
  const [isArrowTouched, setIsArrowTouched] = useState(false)
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

  const { user, logout } = useAuth0()

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <div className="absolute top-0 right-0 mt-3 mr-4">
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
      {navOpened && (
        <div>
          <Nav props={navOpened, setNavOpened}/>
        </div>
      )}
    </div>
  )
}

export default DashboardHeader
