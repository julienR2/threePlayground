import Sphere from '../Sphere'
import Cube from '../Cube'

const Spaceship = ({
  geometry,
  material,
  radius,
  position = [0, 0, 0],
  orbit = true,
  data,
  world
} = {}) => {

  // var geometry = new THREE.BoxGeometry(1, 1, 1);
  // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // var cube = new THREE.Mesh(geometry, material);


  // const mesh = Sphere({ geometry, material, radius })
  const mesh = Cube()
  // 

  // const rotation = (2 * Math.PI) / (data.orbit_revolution * 3)
  var flight_plan = [
    {
      datetime_start: '100',
      // datetime_start: '01/01/2020:22:22:00:00',
      planned_duration: '60', // seconds
      start_engine: true,
      engine_thrust: 200, // newtons,
      thrust_direction: {
        x: 0,
        y: -1,
        z: 1
      }
    },
    {
      // datetime_start: '01/01/2020:22:23:00:00',
      planned_duration: '600', // seconds
      start_engine: false,
      autopilot: true,
      rendezVousPoint: {
        ref: 'earth',
        x: 0,
        y: -1,
        z: 1
      },
    },
    {
      // datetime_start: '01/01/2020:22:33:00:00',
      planned_duration: null, // seconds
      start_engine: false,

    }

  ];
  // 
  // 

  const x = 0
  const y = -400 // -455
  const z = 125 // 150

  mesh.position.set(x, y, z)
  // 
  // let theta = 0
  var local_time = 0;

  var target_position = [x, y, z]

  const update = () => {
    // local_time = 1 + local_time
    // if (local_time == datetime_start){
    // if (flight_plan.filter(step => step.date)){
    console.log(world.camera)

    // }
    // theta = theta + rotation

    // mesh.position.x = 
    mesh.position.y += 0.1
    mesh.position.z -= 0.03

    world.camera.position.set(mesh.position.x, mesh.position.y - 50, mesh.position.z + 20)
    // mesh.position.y = (data.distance_to_ref * Math.sin(theta))
  }

  return { mesh, update }
}

export default Spaceship
