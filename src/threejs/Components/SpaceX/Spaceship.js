import Sphere from '../Sphere'
import Cube from '../Cube'
import {
  BoxBufferGeometry, MeshBasicMaterial, MeshStandardMaterial,
  Mesh, LineBasicMaterial,
  Geometry,
  Vector3,
  Line
} from 'three'

const Spaceship = ({
  cameraTracking = false,
  spaceshipInformation,
  world
} = {}) => {

  // var geometry = new THREE.BoxGeometry(1, 1, 1);
  // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // var cube = new THREE.Mesh(geometry, material);


  var geometry = new BoxBufferGeometry(1, 1, 1);
  var material = new MeshBasicMaterial({ color: 0xffff00 });
  var mesh = new Mesh(geometry, material);
  // Name object in scene
  mesh.name = spaceshipInformation.spaceship_code;

  // const mesh = Sphere({ geometry, material, radius })
  // const mesh = Cube({ sideSize: 1.5, LengthArrow: 0.5, HeightArrow: 0.7 })
  // 

  // const rotation = (2 * Math.PI) / (data.orbit_revolution * 3)
  // 
  // 
  // g=9.8 m/s^2
  var speed_vector = [
    0.0,
    0.0,
    0.0,
  ]
  // console.log(spaceshipInformation)
  if (spaceshipInformation.takeoff_location.x) {
    mesh.position.set(
      spaceshipInformation.takeoff_location.x,
      spaceshipInformation.takeoff_location.y,
      spaceshipInformation.takeoff_location.z
    )
  } else {
    const default_x = 0
    const default_y = -400 // -455
    const default_z = 125 // 150
    mesh.position.set(default_x, default_y, default_z)

  }

  // 
  // let theta = 0
  var local_time = 0;

  // earth position on 1sf of jan

  var flight_plan_current_step = 0
  var target_vector = null


  var target_position, is_orbiting, previous_distance_to_sun, previous_position





  const update = () => {

    if (spaceshipInformation.flight_plan[flight_plan_current_step]) {
      // Local var for easier access // console.log(cur_fp_step)
      var cur_fp_step = spaceshipInformation.flight_plan[flight_plan_current_step]
      // 
      if (spaceshipInformation.flight_plan[flight_plan_current_step]) {
        var step_type = spaceshipInformation.flight_plan[flight_plan_current_step].type
        // console.log(local_time, step_type, min_start_datetime)
        if (step_type === 'takeoff') {

          // Set spaceship takeoff location
          if (spaceshipInformation.takeoff_location.location_code) {
            var target_takeoff_location = world.scene.getObjectByName(spaceshipInformation.takeoff_location.location_code);

            mesh.position.set(target_takeoff_location.position.x, target_takeoff_location.position.y, target_takeoff_location.position.z + 1.25)
          }

          var min_start_datetime = spaceshipInformation.flight_plan[flight_plan_current_step].datetime_start
          if (local_time === min_start_datetime) {




            flight_plan_current_step += 1
          }
        }
        else if (step_type === 'rendezvous') {
          // START - If has not started rendez-vous manoeuver
          if (target_vector === null) {
            // Get Rendez-vous locations
            var obj = world.scene.getObjectByName(cur_fp_step.rendezVous.target_object_code); // 
            target_position = [obj.position.x, obj.position.y, obj.position.z]
            // Calculate target vector to get there
            target_vector = [
              target_position[0] - mesh.position.x,
              target_position[1] - mesh.position.y,
              target_position[2] - mesh.position.z
            ]
            // Apply thrust to get there
            speed_vector = [
              target_vector[0] * 0.01,
              target_vector[1] * 0.01,
              target_vector[2] * 0.01
            ]
            // END - If has not started rendez-vous manoeuver
          }

          // START - If is on its ways
          else {
            // check if has arrived
            if (
              (Math.pow(target_position[0], 2) - Math.pow(mesh.position.x, 2) < 2) &&
              (Math.pow(target_position[1], 2) - Math.pow(mesh.position.y, 2) < 2) &&
              (Math.pow(target_position[2], 2) - Math.pow(mesh.position.z, 2) < 2)
            ) {
              // Stop & go to next step
              // speed_vector = [0, 0, 0]
              target_vector = null
              flight_plan_current_step += 1
            }
          }
          // END - If is on its ways

        }
        else if (step_type === 'orbit') {
          // 
          // START - Initial Orbiting thrust
          if (!is_orbiting) {
            if (cur_fp_step.initial_thrust) {
              speed_vector = [
                speed_vector[0] += cur_fp_step.initial_thrust.x,
                speed_vector[1] += cur_fp_step.initial_thrust.y,
                speed_vector[2] += cur_fp_step.initial_thrust.z,
              ]
            }
            is_orbiting = true
          }
          // END - Initial Orbiting thrust
          // 
          // 
          // 



          // 
          // START - When has reach max distance from fun
          // When has reached max distance to sun (main center of gravity)
          if (previous_distance_to_sun && previous_distance_to_sun >= distance_to_sun) {
            // console.log("distance_to_sun: ", distance_to_sun * 1000000, " km")
            // console.log("gravity_pull_vector: ", gravity_pull_vector)
          } else {
            // console.log("speed_vector: ", speed_vector)
          }
          previous_distance_to_sun = distance_to_sun
          // END - When has reach max distance from fun
          // 

        }
      }
      // 
      // 
    }
    // 
    var inertia_vector = [0, 0, 0]
    // 
    if (previous_position) {
      inertia_vector = [
        mesh.position.x - previous_position.x,
        mesh.position.y - previous_position.y,
        mesh.position.z - previous_position.z
      ]
    }
    speed_vector = [
      speed_vector[0] += inertia_vector[0],
      speed_vector[1] += inertia_vector[1],
      speed_vector[2] += inertia_vector[2]
    ]

    if (step_type !== 'takeoff') {
      // 
      // START - Apply Sun gravitationnal pull
      // Get pull vector
      var dx = 0 - mesh.position.x;
      var dy = 0 - mesh.position.y;
      var dz = 0 - mesh.position.z;
      // Get pull force
      var distance_to_sun = Math.sqrt(dx * dx + dy * dy + dz * dz);
      var mass_spacecraft = 10
      var mass_sun = 1.9884 * Math.pow(10, 5)
      var gravity_pull_force = (
        (mass_sun * mass_spacecraft)
        /
        Math.pow((distance_to_sun * 1000), 2)
      )

      // Build gravity pull force vector (origin: spaceship)
      var gravity_pull_vector = {
        x: dx * gravity_pull_force,
        y: dy * gravity_pull_force,
        z: dz * gravity_pull_force,
      }
      // Apply gravity pull to speed vector
      speed_vector = [
        speed_vector[0] += gravity_pull_vector.x,
        speed_vector[1] += gravity_pull_vector.y,
        speed_vector[2] += gravity_pull_vector.z
      ]
      // END - Apply Sun gravitationnal pull
      // 
    }
    // 
    // 
    // Update ship position
    mesh.position.x += speed_vector[0]
    mesh.position.y += speed_vector[1]
    mesh.position.z += speed_vector[2]
    // 
    // 
    // START - Draw orbit history lines
    if (previous_position) {
      var material = new LineBasicMaterial({ color: 0xffff00 });
      var geometry = new Geometry();
      // geometry.vertices.push(new Vector3(previous_position.x, previous_position.y, previous_position.z));
      geometry.vertices.push(new Vector3(mesh.position.x, mesh.position.y, mesh.position.z));
      geometry.vertices.push(new Vector3(mesh.position.x, mesh.position.y, mesh.position.z + 0.1));
      // geometry.vertices.push(new Vector3(0, 0, 0));
      var line = new Line(geometry, material);
      world.scene.add(line);
    }
    // END - Draw orbit history lines 
    // 
    // UPDATE TICKS
    // Update local tick time
    local_time = local_time + 1
    previous_position = mesh.position
    // 
  }

  return { mesh, update }
}

export default Spaceship
