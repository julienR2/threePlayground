import { World, Lights } from '../../Managers'
import Ellipse from '../../Components/Ellipse'
import Planet from '../../Components/SpaceX/Planet'

import planets from './planets'

const OrbitWorld = container => {
  const world = new World({ container })
  const earth_sun_orbit = Ellipse()

  world.scene.add(...Lights(), earth_sun_orbit)

  Object.values(planets).forEach(planet => {
    const newPlanet = Planet({ data: planet })

    world.addObject(newPlanet)
  })

  // Set satellites rotation speeds (is approximation because some are non-linear)
  // const rotation_speed_philae =
  //   (2 * Math.PI) /
  //   satellite_object_list.find(obj => obj.satellite_code === 'philae')
  //     .orbit_revolution_length
  //
  //

  world.onUpdate(delta => {})

  return world
}

export default OrbitWorld
