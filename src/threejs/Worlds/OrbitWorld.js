import { World, Lights } from '../Managers'
import Sphere from '../Components/Sphere'
import Ellipse from '../Components/Ellipse'

const OrbitWorld = container => {
  const world = new World({ container })
  const ellipse = Ellipse()
  const moon = Sphere()
  // Set moon position in the Scene
  moon.position.x = 10

  world.scene.add(...Lights(), moon, ellipse)

  let theta = 0
  const dTheta = (2 * Math.PI) / 1000

  world.onUpdate(delta => {
    // Update moon position with the parametric equation of a circle
    // ToDo: use delta instead for a better rendering
    theta += dTheta // To adjust the step
    moon.position.x = 10 * Math.cos(theta)
    moon.position.y = 10 * Math.sin(theta)

    // Others updates of Object
    // ...
  })

  return world
}

export default OrbitWorld
