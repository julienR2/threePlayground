import { Scene as THScene, Color } from 'three'
import { colors } from '../constants'

const Scene = () => {
  const scene = new THScene()

  scene.background = new Color(colors.skyBlue)

  return scene
}

export default Scene
