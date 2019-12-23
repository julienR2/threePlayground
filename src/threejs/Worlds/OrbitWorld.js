import { World, Lights } from '../Managers'
import Sphere from '../Components/Sphere'
import Ellipse from '../Components/Ellipse'

const OrbitWorld = container => {
  const world = new World({ container })
  // Planets
  const sun = Sphere()
  const earth = Sphere()
  const mars = Sphere()
  const philae = Sphere()
  // Set moon position in the Scene
  // moon.position.x = 10
  sun.position.x = 0
  sun.position.y = 0

  world.scene.add(...Lights())
  // Add planets
  world.scene.add(earth, sun, mars)
  // Add Interstellar objects
  world.scene.add(philae)
  // 
  // 
  // PLANET INFORMATION
  // Distance
  var distance_sun_earth = 150 / 10 // millions de km
  var distance_sun_mars = 228 / 10 // millions de km
  // 
  let theta_earth = 0
  let theta_mars = 0
  let theta_philae = 0
  // Set planet rotation speeds (is approximation because some are non-linear, eg: philae)
  const rotation_speed_earth = (2 * Math.PI) / 365
  const rotation_speed_mars = (2 * Math.PI) / 687
  const rotation_speed_philae = (2 * Math.PI) / (365 * 6.5)
  // 
  // 
  // Orbits
  const earth_sun_orbit = Ellipse()
  const mars_sun_orbit = Ellipse()
  // UPDATE ORBITS
  // Set Earth circular orbit 
  earth_sun_orbit.xRadius = distance_sun_earth
  earth_sun_orbit.yRadius = distance_sun_earth
  // Set Mars circular orbit 
  mars_sun_orbit.xRadius = distance_sun_mars
  mars_sun_orbit.yRadius = distance_sun_mars
  // 
  // ToDo: Orbit drawing not updating
  // 
  // Draw planet orbits
  world.scene.add(earth_sun_orbit, mars_sun_orbit)
  // 


  world.onUpdate(delta => {
    // Update moon position with the parametric equation of a circle
    // ToDo: use delta instead for a better rendering
    // ToDo: move to object or functions
    // ToDo: create function to get planet movement vector
    // ToDo: get planet textures from : http://jeromeetienne.github.io/threex.planets/examples/earth.html
    // 
    // 
    // Others updates of Object
    // ...
    // 
    // Earth position
    theta_earth += rotation_speed_earth // To adjust the step
    earth.position.x = distance_sun_earth * Math.cos(theta_earth)
    earth.position.y = distance_sun_earth * Math.sin(theta_earth)
    // Mars position
    theta_mars += rotation_speed_mars // To adjust the step
    mars.position.x = distance_sun_mars * Math.cos(theta_mars)
    mars.position.y = distance_sun_mars * Math.sin(theta_mars)
    // Philae position
    // ToDo: fix orbit curve
    theta_philae += rotation_speed_philae // To adjust the step
    philae.position.x = (distance_sun_earth + distance_sun_mars) * Math.cos(theta_philae)
    philae.position.y = (distance_sun_earth + distance_sun_mars) * 8 * Math.sin(theta_philae)

  })

  return world
}

export default OrbitWorld
