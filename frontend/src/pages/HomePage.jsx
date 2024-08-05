import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const HomePage = () => {
  const generateLogos = (count) => {
    const logos = [reactLogo, viteLogo]
    const pattern = []
    for (let i = 0; i < count; i++) {
      pattern.push(...logos)
    }
    return pattern
  }

  const [feed, setFeed] = useState(generateLogos(20))
  const [loading, setLoading] = useState(false)

  const loadMoreLogos = () => {
    if (loading) return

    setLoading(true)
    setTimeout(() => {
      setFeed((prevFeed) => [...prevFeed, ...generateLogos(10)])
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        loadMoreLogos()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  return (
    <>
      <NavBar page='home'/>
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {feed.map((logo, index) => (
          <img key={index} src={logo} className="h-64 p-8 bg-gray-100 rounded-2xl hover:bg-gray-300 hover:opacity-50" alt={`Logo ${index}`} />
        ))}
      </div>
    </>
  )
}

export default HomePage
