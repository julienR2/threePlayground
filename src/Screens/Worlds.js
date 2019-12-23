import React from 'react'
import { useParams } from 'react-router-dom'
// import { Wrapper, Flex } from '@julienr2/common/lib/components'

import Sidebar from '../Components/Sidebar'
import * as worlds from '../threejs'
import ThreeContainer from '../Components/ThreeContainer'

const Worlds = () => {
  const { world } = useParams()

  return (
    <div style={styles.wrapper}>
      <Sidebar worlds={Object.keys(worlds)} />
      <div style={styles.content}>
        <ThreeContainer world={worlds[world]} />
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    height: '100%',
  },
  content: {
    position: 'relative',
    flex: 1,
  },
}

export default Worlds
