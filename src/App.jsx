import React from 'react'
import Navbar from './Navbar'
import Header from './components/Header'
import { motion } from 'framer-motion'
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {

  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.6,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <Navbar/>
        <DarkModeSwitch/>
        <Header/>
      </motion.div>
  )
}

export default App
