import { Color } from 'three'
import { World, Lights } from '../../Managers'
// import Ellipse from '../../Components/Ellipse'
import Planet from '../../Components/SpaceX/Planet'
import Orbit from '../../Components/SpaceX/Orbit'

import planets from './planets'

const OrbitWorld = container => {
  const world = new World({ container })
  // const earth_sun_orbit = Ellipse()

  world.scene.add(...Lights())
  // Set world background color
  const background_color = new Color("rgb(20, 20, 20)");
  world.scene.background = background_color

  Object.values(planets).forEach(planet => {
    // console.log(planet)
    // console.log(planet)
    // const newOrbit = Orbit({ data: planet })
    const newOrbit = Orbit({ radius: planet.distance_to_ref })
    world.scene.add(newOrbit)
  })

  Object.values(planets).forEach(planet => {
    const newPlanet = Planet({ data: planet, radius: planet.diameter / 2 / 10000 })
    world.addObject(newPlanet)
  })


  // Set satellites rotation speeds (is approximation because some are non-linear)
  // const rotation_speed_philae =
  //   (2 * Math.PI) /
  //   satellite_object_list.find(obj => obj.satellite_code === 'philae')
  //     .orbit_revolution_length
  //
  //

  world.onUpdate(delta => { })

  return world
}

export default OrbitWorld
