import { Color } from 'three'
import { World, Lights } from '../../Managers'
// import Ellipse from '../../Components/Ellipse'
import Spaceship from '../../Components/SpaceX/Spaceship'
import Planet from '../../Components/SpaceX/Planet'
import Orbit from '../../Components/SpaceX/Orbit'

import planets from './planets'
import spaceships from './spaceships'

const OrbitWorld = container => {
  const world = new World({ container })
  // const earth_sun_orbit = Ellipse()

  world.scene.add(...Lights())
  // Set world background color
  const background_color = new Color("rgb(20, 20, 20)");
  world.scene.background = background_color
  // Draw planet orbits
  Object.values(planets).forEach(planet => {
    const newOrbit = Orbit({ radius: planet.distance_to_ref })
    world.scene.add(newOrbit)
  })
  // Insert Stars
  // Insert planets
  Object.values(planets).forEach(planet => {
    const newPlanet = Planet({ data: planet, radius: planet.diameter / 2 / 10000 })
    world.addObject(newPlanet)
  })
  // Insert spaceships
  Object.values(spaceships).forEach(spaceship => {
    if (spaceship.active) {
      const newSpaceship = Spaceship({ spaceshipInformation: spaceship, world: world })
      world.addObject(newSpaceship)
    }
  })

  //
  // CAMERA TRACKING - Set object for camera to track
  var object_tracking_name = 'sun'
  // var object_tracking_name = 'elgringo'
  // var object_tracking_name = 'earth'
  // 

  // Set initial camera position & angle
  world.camera.position.set(0, -655, 350)
  world.camera.lookAt(0, 0, 0)
  // 
  // 


  world.onUpdate(delta => {
    // 
    // Track object on camera
    var camera_target = world.scene.getObjectByName(object_tracking_name);
    // If an object is selected for tracking :
    if (camera_target) {
      // Camera distance & depth angle ratio
      var distance_behind = 100
      var depth_ratio = 0.34
      // Calculate camera position
      var cam_pos_x = camera_target.position.x
      var from_cam_pos_y = camera_target.position.y - distance_behind
      var from_cam_pos_Z = camera_target.position.z + (distance_behind * depth_ratio)
      world.camera.position.set(cam_pos_x, from_cam_pos_y, from_cam_pos_Z)
      world.camera.lookAt(camera_target.position)
    }
    // End camera tracking code segment

  })

  return world
}

export default OrbitWorld
