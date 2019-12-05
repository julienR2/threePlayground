import React from 'react'

const ThreeContainer = ({ world }) => {
  const containerRef = React.useRef()
  const currentWorld = React.useRef()

  React.useEffect(() => {
    currentWorld.current && currentWorld.current.application.destroy()

    currentWorld.current = new world(containerRef.current)
  }, [world])

  return <div ref={containerRef} style={styles.container} />
}

const styles = {
  container: {
    outline: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
}

export default ThreeContainer
