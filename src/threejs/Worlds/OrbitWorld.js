import { World, Lights } from '../Managers'
import Sphere from '../Components/Sphere'
import Ellipse from '../Components/Ellipse'

const OrbitWorld = container => {
  const world = new World({ container })
  const ellipse = Ellipse()
  const sun = Sphere()
  const earth = Sphere()
  const mars = Sphere()
  // Set moon position in the Scene
  // moon.position.x = 10
  sun.position.x = 0
  sun.position.y = 0

  world.scene.add(...Lights())
  world.scene.add(earth, sun, mars, ellipse)

  let theta_earth = 0
  let theta_mars = 0
  const dTheta = (2 * Math.PI) / 1000
  const rotation_speed_earth = (2 * Math.PI) / 365
  const rotation_speed_mars = (2 * Math.PI) / 687

  // 
  var distance_sun_earth = 150 / 10 // millions de km
  var distance_sun_mars = 228 / 10 // millions de km

  world.onUpdate(delta => {
    // Update moon position with the parametric equation of a circle
    // ToDo: use delta instead for a better rendering
    theta_earth += rotation_speed_earth // To adjust the step
    theta_mars += rotation_speed_mars // To adjust the step

    earth.position.x = distance_sun_earth * Math.cos(theta_earth)
    earth.position.y = distance_sun_earth * Math.sin(theta_earth)
    // 
    mars.position.x = distance_sun_mars * Math.cos(theta_mars)
    mars.position.y = distance_sun_mars * Math.sin(theta_mars)

    // Others updates of Object
    // ...
  })

  return world
}

export default OrbitWorld
