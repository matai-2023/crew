import LoginButton from './LoginButton/LoginButton'
import RegisterButton from './RegisterButton/RegisterButton'
import Background from './UI/Background/Background'
import { motion } from 'framer-motion'
import Header from './UI/Header/Header'

const titles = [
  {
    title: 'your events.',
  },
  { title: 'your passions.' },
  {
    title: 'your crew.',
  },
]

function LandingPage() {
  return (
    <>
      <Background>
        <div className="pt-44 pl-4 flex flex-col gap-4">
          {titles.map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              <p className="text-4xl text-white">{title.title}</p>
            </motion.div>
          ))}
          <div className="flex gap-2">
            <LoginButton />
            <RegisterButton />
          </div>
        </div>
      </Background>
    </>
  )
}

export default LandingPage
