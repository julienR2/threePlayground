import { World, Lights, Camera } from '../Managers'
import Parrot from '../Components/Parrot'

const BirdsWorld = container => {
  const camera = Camera(container)
  camera.position.set(-1.5, 1.5, 6.5)

  const world = new World({ container, camera })
  world.scene.add(...Lights())

  Parrot(world.scene)
  return world
}

export default BirdsWorld
