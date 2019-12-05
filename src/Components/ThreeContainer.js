import React from 'react'

const ThreeContainer = ({ world }) => {
  const containerRef = React.useRef()

  React.useEffect(() => {
    new world(containerRef.current)
  })

  return <div ref={containerRef} style={styles.container} />
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
}

export default ThreeContainer
