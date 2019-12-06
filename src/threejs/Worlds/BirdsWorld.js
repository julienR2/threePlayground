import { World, Lights } from '../Managers'
import Parrot from '../Components/Parrot'

const BirdsWorld = container => {
  const world = new World({ container })
  world.scene.add(...Lights())
  world.camera.position.set(-1.5, 1.5, 6.5)

  Parrot(world.scene)
  return world
}

export default BirdsWorld
