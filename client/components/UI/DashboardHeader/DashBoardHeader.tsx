import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo.tsx'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function DashboardHeader() {
  const [isArrowTouched, setIsArrowTouched] = useState(false)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
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

  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <Link to="/" className="absolute top-0 right-0 mt-3 mr-4"></Link>
      <Logo />
      <div className="mt-3 ml-4">
        <motion.button
          onClick={handleArrowTouch}
          initial="untouched"
          animate={isArrowTouched ? 'touched' : 'untouched'}
          variants={arrowScale}
        >
          <img src="/home/eda/workspace/crew/public/Arrow.png" alt="Back" />
        </motion.button>
      </div>
    </div>
  )
}

export default DashboardHeader
