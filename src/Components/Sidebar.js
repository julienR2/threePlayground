import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Sidebar = ({ worlds }) => {
  const { world } = useParams()
  const orderedWorlds = [world, ...worlds.filter(name => name !== world).sort()]

  return (
    <div style={styles.sidebar}>
      {orderedWorlds.map(name => (
        <NavLink
          key={name}
          to={`/${name}`}
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          {name}
        </NavLink>
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
  activeLink: {
    marginBottom: 36,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}

export default Sidebar
