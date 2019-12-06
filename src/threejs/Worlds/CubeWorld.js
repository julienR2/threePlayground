import { World, Lights } from '../Managers'
import Cube from '../Components/Cube'

const CubeWorld = container => {
  const world = new World({ container })

  world.scene.add(...Lights(), Cube())
  return world
}

export default CubeWorld
