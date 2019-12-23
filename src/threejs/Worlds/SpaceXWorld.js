import { World, Lights } from '../Managers'
import Sphere from '../Components/Sphere'
import Ellipse from '../Components/Ellipse'

const OrbitWorld = container => {
  const world = new World({ container })
  //
  var scale_ref = 10
  // Star
  var star_object_list = [
    {
      star_code: 'sun',
      referencial_object_code: null, // what is star referenced to ?
      distance_to_ref: 150, // in million of kms or maybe lightyears here
      diameter: 1391000000, // in kms // 1,391 million km
    },
  ]
  //
  // Planets
  var planet_object_list = [
    {
      planet_code: 'mercury',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 57, //57,909,175, // million of kms,
      diameter: 4878, // km
      orbit_revolution: 364.25, // earth days
      rotation_period: 58.6, // earth days
      source_url: 'https://www.space.com/16080-solar-system-planets.html',
    },
    {
      planet_code: 'venus',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 108.208, //108,208,930, // million of kms,
      diameter: 12104, // km
      orbit_revolution: 225, // earth days
      rotation_period: 241, // earth days
      source_url: 'https://www.space.com/16080-solar-system-planets.html',
    },
    //
    //
    //
    //
    //

    {
      planet_code: 'earth',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 150, // in million of kms,
      diameter: 12742, // km
      rotation_period: 1, // earth days // Day: 23 hours, 56 minutes
      orbit_revolution: 365.24, // earth days Orbit: 365.24 days
      //       Name originates from "Die Erde," the German word for "the ground."
      // Diameter: 7,926 miles (12,760 km)
      source_url:
        'https://www.space.com/54-earth-history-composition-and-atmosphere.html',
    },
    {
      planet_code: 'mars',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 228, // in million of kms
      // Discovery: Known to the ancient Greeks and visible to the naked eye
      // Named for the Roman god of war
      diameter: 6787, // km
      rotation_period: 1.05, // earth days // Day: 24 hours, 37 minutes
      orbit_revolution: 687, // earth days Orbit: 365.24 days
    },
    {
      planet_code: 'jupiter',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 778.4, // in million of kms // 778,412,020 km
      diameter: 139822, // km
      rotation_period: 0.4, // earth days // 9.8 Earth hours
      orbit_revolution: 52122, // earth days // Orbit: 11.9 Earth years
      // Discovery: Known to the ancient Greeks and visible to the naked eye
      // Named for the ruler of the Roman gods
    },
    {
      planet_code: 'saturn',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 1433.4, // in million of kms // 1,433,449,370 km.
      // Discovery: Known to the ancient Greeks and visible to the naked eye
      // Named for Roman god of agriculture
      // Diameter: 74,900 miles (120,500 km)
      // Orbit: 29.5 Earth years
      // Day: About 10.5 Earth hours
      // https://www.space.com/48-saturn-the-solar-systems-major-ring-bearer.html
    },
    {
      planet_code: 'uranus',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 3000, // in million of kms
      // Discovery: 1781 by William Herschel (was originally thought to be a star)
      // Named for the personification of heaven in ancient myth
      // Diameter: 31,763 miles (51,120 km)
      // Orbit: 84 Earth years
      // Day: 18 Earth hours
      // https://www.space.com/45-uranus-seventh-planet-in-earths-solar-system-was-first-discovered-planet.html
    },
    {
      planet_code: 'neptune',
      referencial_object_code: 'star_sun', // always a star for planet ?
      distance_to_ref: 4500.4, // in million of kms // 4,503,443,661
      // Discovery: 1846
      // Named for the Roman god of water
      // Diameter: 30,775 miles (49,530 km)
      // Orbit: 165 Earth years
      // Day: 19 Earth hours
      // https://www.space.com/41-neptune-the-other-blue-planet-in-our-solar-system.html
    },
    // {
    //   planet_code: 'pluto',
    //   planet_type: 'dwarf',
    //   referencial_object_code: 'star_sun', // always a star for planet ?
    //   distance_to_ref: 228, // in million of kms
    //   // Discovery: 1930 by Clyde Tombaugh
    //   // Named for the Roman god of the underworld, Hades
    //   // Diameter: 1,430 miles (2,301 km)
    //   // Orbit: 248 Earth years
    //   // Day: 6.4 Earth day
    // },
    // {
    //   planet_code: 'planet_nine',
    //   planet_type: 'dwarf',
    //   referencial_object_code: 'star_sun', // always a star for planet ?
    //   distance_to_ref: 228, // in million of kms
    //   // Discovery: 1930 by Clyde Tombaugh
    //   // Named for the Roman god of the underworld, Hades
    //   // Diameter: 1,430 miles (2,301 km)
    //   // Orbit: 248 Earth years
    //   // Day: 6.4 Earth day
    // },
  ]
  //
  // Satellite
  var satellite_object_list = [
    {
      satellite_code: 'moon',
      referencial_object_code: 'planet_earh', // always a planet for a satellite ?
      distance_to_ref: 0.35641, // in million of kms
      diameter: 3474.2,
    },
    {
      satellite_code: 'iss',
      referencial_object_code: 'planet_earh', // always a planet for a satellite ?
      distance_to_ref: 0.0004, // in million of kms // 356 410 km au périgée et 405 500 km à l'apogée.
      speed: 28000, // in km/h
      diameter: 0.3,
    },
    {
      satellite_code: 'philae',
      referencial_object_code: 'star_sun',
      orbit_revolution_length: 2400, // in earth days
      distance_to_ref: null, // in million of kms
      orbit: {
        orbit_type: 'ellipsis',
        closest_to_center: 500,
        farthest_from_center: 4000,
      },
    },
  ]

  //
  var planet_list = []
  //
  planet_object_list.forEach(element => {
    console.log(element)
    const new_planet = Sphere({ newRadius: 10 })
    new_planet.position.x = 0
    var planet_radius = 0.5
    new_planet.scale.set = (planet_radius, planet_radius, planet_radius)
    new_planet.position.y = (-1 * element.distance_to_ref) / scale_ref
    world.scene.add(new_planet)
    planet_list.push(new_planet)
  })

  // Add Stars
  const sun = Sphere()
  const earth = Sphere()
  const mars = Sphere()
  const philae = Sphere()
  // ToDo: Choose scene center (reférenciel) & apply x,y,z conversions
  sun.position.x = 0
  sun.position.y = 0
  // ToDo: Change add lights to add stars
  world.scene.add(...Lights())
  //
  // Add planets
  world.scene.add(earth, mars)
  //
  // Add Interstellar objects
  world.scene.add(philae)
  //
  //
  // PLANET INFORMATION
  // Set PlanetDistance
  var distance_sun_earth =
    planet_object_list.find(obj => obj.planet_code === 'earth')
      .distance_to_ref / 10 // scale : divide by 10
  var distance_sun_mars =
    planet_object_list.find(obj => obj.planet_code === 'mars').distance_to_ref /
    10 // scale : divide by 10
  //
  let theta_earth = 0
  let theta_mars = 0
  let theta_philae = 0
  //
  // Set planet rotation speeds (is approximation because some are non-linear)
  const rotation_speed_earth =
    (2 * Math.PI) /
    planet_object_list.find(obj => obj.planet_code === 'earth').orbit_revolution
  const rotation_speed_mars =
    (2 * Math.PI) /
    planet_object_list.find(obj => obj.planet_code === 'mars').orbit_revolution
  // Set satellites rotation speeds (is approximation because some are non-linear)
  const rotation_speed_philae =
    (2 * Math.PI) /
    satellite_object_list.find(obj => obj.satellite_code === 'philae')
      .orbit_revolution_length
  //
  //
  // Orbits
  const earth_sun_orbit = Ellipse()
  // const mars_sun_orbit = Ellipse()
  // // UPDATE ORBITS
  // // Set Earth circular orbit
  // earth_sun_orbit.xRadius = distance_sun_earth
  // earth_sun_orbit.yRadius = distance_sun_earth
  // // Set Mars circular orbit
  // mars_sun_orbit.xRadius = distance_sun_mars
  // mars_sun_orbit.yRadius = distance_sun_mars
  //
  // ToDo: Orbit drawing not updating
  //
  // Draw planet orbits
  world.scene.add(earth_sun_orbit)
  // world.scene.add(earth_sun_orbit, mars_sun_orbit)
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
    philae.position.x =
      ((distance_sun_earth + distance_sun_mars) / 2) * Math.cos(theta_philae)
    philae.position.y =
      ((distance_sun_earth + distance_sun_mars) / 2) * 8 -
      (distance_sun_earth + distance_sun_mars) / 2 +
      ((distance_sun_earth + distance_sun_mars) / 2) *
        8 *
        Math.sin(theta_philae)
  })

  return world
}

export default OrbitWorld
