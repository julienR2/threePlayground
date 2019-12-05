import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ worlds }) => {
  return (
    <div style={styles.sidebar}>
      {worlds.map(name => (
        <Link key={name} to={`/${name}`} style={styles.link}>
          {name}
        </Link>
      ))}
    </div>
  )
}

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    width: 180,
    padding: 24,
    height: '100%',
    backgroundColor: '#212029',
  },
  link: {
    color: '#ffffff',
    marginBottom: 12,
  },
}

export default Sidebar
