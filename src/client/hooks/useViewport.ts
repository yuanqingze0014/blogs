import { useState, useEffect } from 'react'

const useViewport = () => {
  const [wh, setWH] = useState<number>(window.innerHeight)
  const [ww, setWW] = useState<number>(window.innerWidth)

  function handleWindowResize() {
    setWH(window.innerHeight)
    setWW(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return [wh, ww]
}

export default useViewport
