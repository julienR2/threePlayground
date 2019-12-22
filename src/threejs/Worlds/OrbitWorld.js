import { World, Lights } from '../Managers'
import Sphere from '../Components/Sphere'
import Ellipse from '../Components/Ellipse'

const OrbitWorld = container => {
  const world = new World({ container })
  const sphere = Sphere()
  world.scene.add(...Lights(), sphere, Ellipse())

  world.onUpdate(delta => {
    // sphere.position.x = sphere.position.x + 0.1
    // sphere.position.y = Math.sqrt(4 * -Math.pow())
    // sphere.position.z = sphere.position.z + 0.1
  })

  return world
}

export default OrbitWorld
