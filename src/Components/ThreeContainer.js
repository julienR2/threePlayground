import React from 'react'

const ThreeContainer = ({ world }) => {
  const containerRef = React.useRef()
  const worldRef = React.useRef()

  React.useEffect(() => {
    worldRef.current && worldRef.current.destroy()

    worldRef.current = world(containerRef.current)
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
