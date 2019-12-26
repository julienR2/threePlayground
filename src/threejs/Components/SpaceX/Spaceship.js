// import Sphere from '../Sphere'
// import Cube from '../Cube'
import {
  BoxBufferGeometry, MeshBasicMaterial,
  SphereGeometry,
  Mesh, LineBasicMaterial,
  Geometry,
  Vector3,
  Line,
  Group,
  // TextBufferGeometry, 
  Texture,
  SpriteMaterial,
  Sprite,

} from 'three'

const Spaceship = ({
  cameraTracking = false,
  spaceshipInformation,
  world
} = {}) => {

  // var geometry = new THREE.BoxGeometry(1, 1, 1);
  // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // var cube = new THREE.Mesh(geometry, material);
  var sphereGeom = new SphereGeometry(5, 25, 25);
  var blueMaterial = new MeshBasicMaterial({ color: 0xFFFAFA, transparent: true, opacity: 0.1 });
  var spaceshipTracker = new Mesh(sphereGeom, blueMaterial);

  var geometry = new BoxBufferGeometry(0.5, 1, 1);
  var material = new MeshBasicMaterial({ color: 0xffff00 });
  var spaceship_mesh = new Mesh(geometry, material);
  // Name object in scene







  // Create group & add items
  var mesh = new Group();
  mesh.add(spaceship_mesh);
  mesh.add(spaceshipTracker);
  // 
  mesh.name = spaceshipInformation.spaceship_code;
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // var textGeo, textMesh1, materials
  // // 
  // // 
  // // 
  // var loader = new FontLoader();
  // var textGeometry
  // loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

  //   textGeometry = new TextGeometry('Hello three.js!', {
  //     font: font,
  //     size: 8,
  //     height: 1,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 10,
  //     bevelSize: 8,
  //     bevelOffset: 0,
  //     bevelSegments: 5
  //   })
  // })
  // mesh.add(textGeometry);
  // var textGeo = new BufferGeometry().fromGeometry(textGeometry);
  // var textMesh1 = new Mesh(textGeo, materials);





  function makeTextSprite(message, parameters) {
    if (parameters === undefined) parameters = {};

    var fontface = parameters.hasOwnProperty("fontface") ?
      parameters["fontface"] : "Arial";

    var fontsize = parameters.hasOwnProperty("fontsize") ?
      parameters["fontsize"] : 18;

    var borderThickness = parameters.hasOwnProperty("borderThickness") ?
      parameters["borderThickness"] : 4;

    var borderColor = parameters.hasOwnProperty("borderColor") ?
      parameters["borderColor"] : { r: 0, g: 0, b: 0, a: 1.0 };

    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
      parameters["backgroundColor"] : { r: 255, g: 255, b: 255, a: 1.0 };

    // var spriteAlignment = SpriteAlignment.topLeft;
    var spriteAlignment = 0;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;

    // get size data (height depends only on font size)
    var metrics = context.measureText(message);
    var textWidth = metrics.width;

    // background color
    context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
      + backgroundColor.b + "," + backgroundColor.a + ")";
    // border color
    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
      + borderColor.b + "," + borderColor.a + ")";

    context.lineWidth = borderThickness;
    roundRect(context, borderThickness / 2, borderThickness / 2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
    // 1.4 is extra height factor for text below baseline: g,j,p,q.

    // text color
    context.fillStyle = "rgba(0, 0, 0, 1.0)";

    context.fillText(message, borderThickness, fontsize + borderThickness);

    // canvas contents will be used for a texture
    var texture = new Texture(canvas)
    texture.needsUpdate = true;

    var spriteMaterial = new SpriteMaterial(
      { map: texture, useScreenCoordinates: false, alignment: spriteAlignment });
    var sprite = new Sprite(spriteMaterial);
    sprite.scale.set(100, 50, 1.0);
    return sprite;
  }

  // function for drawing rounded rectangles
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }




  var spaceshipInformationText = makeTextSprite(spaceshipInformation.spaceship_code,
    {
      fontsize: 24,
      borderThickness: 1,
      borderColor: { r: 255, g: 0, b: 0, a: 1.0 },
      backgroundColor: { r: 100, g: 100, b: 100, a: 0.8 }
    });
  spaceshipInformationText.position.set(0, 0, 0);

  mesh.add(spaceshipInformationText);
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 


  // Set initial spaceship position
  const default_x = 0
  const default_y = -400 // -455
  const default_z = 125 // 150
  mesh.position.set(default_x, default_y, default_z)



  // 
  // let theta = 0
  var orbit_end_time
  // earth position on 1sf of jan


  var target_position, is_orbiting, previous_position
  var target_vector = null
  // var previous_distance_to_sun
  var local_time = 0;

  var mass_spacecraft = 10
  var mass_sun = 1.9884 * Math.pow(10, 5) * 3

  // 
  var flight_plan_current_step = 0
  // g=9.8 m/s^2
  var speed_vector = [
    0.0,
    0.0,
    0.0,
  ]

  // 
  // 
  // 
  // START - Spaceship controls
  var thrust_order = {
    x: 0,
    y: 0,
    z: 0
  }
  document.addEventListener('keydown', onDocumentKeyPress, false);
  function onDocumentKeyPress(e) {
    var charcode = e.which;
    var keynum = String.fromCharCode(charcode)
    // console.log(keynum)
    // console.log(keynum === 'O')
    // alert(String.fromCharCode(keynum));
    if (keynum === 'O') { console.log("UP"); thrust_order.y = 0.1 }
    else if (keynum === 'L') { console.log("DOWN"); thrust_order.y = -0.1 }
    else if (keynum === 'M') { console.log("RIGHT"); thrust_order.x = 0.1 }
    else if (keynum === 'K') { console.log("LEFT"); thrust_order.x = -0.1 }
  }
  // END - Spaceship controls



  const update = () => {
    // 
    // 
    // 


    // 
    // console.log("local_time")
    // console.log(local_time)
    // 
    // 
    // 
    // 
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
          // Set takeoff relative date time 
          var min_start_datetime = spaceshipInformation.flight_plan[flight_plan_current_step].datetime_start
          var min_end_datetime = spaceshipInformation.flight_plan[flight_plan_current_step].datetime_start + spaceshipInformation.flight_plan[flight_plan_current_step].duration
          // 
          // Sun speed of object before take off (get planet speed inertia around sun)
          // console.log(previous_position)
          // console.log(mesh.position.x)

          // 
          // 
          // 
          if (local_time === min_start_datetime) {
            if (previous_position) {
              var inertia_vector = {
                x: mesh.position.x - previous_position.x,
                y: mesh.position.y - previous_position.y,
                z: mesh.position.z - previous_position.z
              }
              speed_vector = [
                inertia_vector.x,
                inertia_vector.y,
                inertia_vector.z
              ]
            }
          }
          if (local_time > min_start_datetime) {
            // 
            // If sent from planet
            // if (target_takeoff_location) {
            //   var vertical_thrust_vector = {
            //     x: mesh.position.x - target_takeoff_location.position.x,
            //     y: mesh.position.y - target_takeoff_location.position.y,
            //     z: mesh.position.z - target_takeoff_location.position.z
            //   }
            //   speed_vector = [
            //     speed_vector[0] += vertical_thrust_vector.x * 0.1,
            //     speed_vector[1] += vertical_thrust_vector.y * 0.1,
            //     speed_vector[2] += vertical_thrust_vector.z * 0.001
            //   ]
            // }

            // Go to next step after take off
          }
          if (local_time >= min_end_datetime) {
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
              speed_vector[0] += target_vector[0] * 0.001,
              speed_vector[1] += target_vector[1] * 0.001,
              speed_vector[2] += target_vector[2] * 0.001
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
        else if (step_type === 'geosync') {

          var target_obj = world.scene.getObjectByName(cur_fp_step.target_object_code); // 
          target_position = [target_obj.position.x, target_obj.position.y, target_obj.position.z + 2]
          // Calculate target vector to get there
          target_vector = [
            target_position[0] - mesh.position.x,
            target_position[1] - mesh.position.y,
            target_position[2] - mesh.position.z
          ]
          // Apply thrust to get there
          speed_vector = [
            speed_vector[0] += target_vector[0] * 0.00001,
            speed_vector[1] += target_vector[1] * 0.00001,
            speed_vector[2] += target_vector[2] * 0.00001
          ]
          // END - If has not started rendez-vous manoeuver




        }
        else if (step_type === 'thrust') {




          var dist_sun = Math.sqrt(
            Math.pow(
              mesh.position.x - 0
              , 2)
            + Math.pow(
              mesh.position.y - 0
              , 2)
            + Math.pow(
              mesh.position.z - 0
              , 2)
          );

          var dist_sun_next_step = Math.sqrt(
            Math.pow(
              mesh.position.x + speed_vector[0] - 0
              , 2)
            + Math.pow(
              mesh.position.y + speed_vector[1] - 0
              , 2)
            + Math.pow(
              mesh.position.z + speed_vector[2] - 0
              , 2)
          );

          var dist_next_step = Math.sqrt(
            Math.pow(
              mesh.position.x + speed_vector[0] - mesh.position.x
              , 2)
            + Math.pow(
              mesh.position.y + speed_vector[1] - mesh.position.y
              , 2)
            + Math.pow(
              mesh.position.z + speed_vector[2] - mesh.position.z
              , 2)
          );

          var hypo_square = Math.pow(dist_sun_next_step, 2)
          var sum_squared_sides = Math.pow(dist_sun, 2) + Math.pow(dist_next_step, 2)

          // 
          var dif = hypo_square - sum_squared_sides
          if (dif > -2 && dif < 2) {
            // 
            console.log(dist_sun)
            console.log(dist_sun_next_step)
            console.log(dist_next_step)
            console.log("hypo_square: ", hypo_square)
            console.log("sum_squared_sides: ", sum_squared_sides)
            console.log("dif: ", hypo_square - sum_squared_sides)
            var thrust_power = cur_fp_step.thrust_force || 0.15
            speed_vector = [
              speed_vector[0] += speed_vector[0] * thrust_power,
              speed_vector[1] += speed_vector[1] * thrust_power,
              speed_vector[2] += speed_vector[2] * thrust_power
            ]

            flight_plan_current_step += 1
          }
          // 
          // console.log(mesh.position.x)
          // console.log(mesh.position.x + speed_vector[0])


          console.log("thrust")



        }
        else if (step_type === 'wait') {
          // console.log("wait until: ", orbit_end_time, " - ", local_time)
          if (!orbit_end_time)
            orbit_end_time = local_time + cur_fp_step.duration

          if (orbit_end_time && orbit_end_time <= local_time) {
            orbit_end_time = null
            flight_plan_current_step += 1
          }
        }
        else if (step_type === 'orbit') {

          // 
          // START - Initial Orbiting thrust
          if (!is_orbiting) {


            // orbit_end_time = local_time + cur_fp_step.orbit_time
            if (cur_fp_step.initial_thrust) {
              speed_vector = [
                speed_vector[0] += cur_fp_step.initial_thrust.x,
                speed_vector[1] += cur_fp_step.initial_thrust.y,
                speed_vector[2] += cur_fp_step.initial_thrust.z,
              ]
            }
            is_orbiting = true
          }
          flight_plan_current_step += 1
          // END - Initial Orbiting thrust
          // 
          // 




        }
      }
      // 
      // 
    } else {
      // mesh.material.color.setHex(0xffffff)
      // mesh.material.color.setHex(0x00FFFF)

    }
    // 
    // 
    // 
    // 
    // 
    // 
    // var inertia_vector = [0, 0, 0]
    // 
    // if (previous_position) {
    //   inertia_vector = [
    //     mesh.position.x - previous_position.x,
    //     mesh.position.y - previous_position.y,
    //     mesh.position.z - previous_position.z
    //   ]
    // }
    // speed_vector = [
    //   speed_vector[0] += inertia_vector[0],
    //   speed_vector[1] += inertia_vector[1],
    //   speed_vector[2] += inertia_vector[2]
    // ]

    if (step_type !== 'takeoff') {
      // 
      // START - Apply Sun gravitationnal pull
      // Get pull vector
      var dx = 0 - mesh.position.x;
      var dy = 0 - mesh.position.y;
      var dz = 0 - mesh.position.z;
      // Get pull force
      var distance_to_sun = Math.sqrt(dx * dx + dy * dy + dz * dz);
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
      // Apply thrust order
      speed_vector = [
        speed_vector[0] += thrust_order.x,
        speed_vector[1] += thrust_order.y,
        speed_vector[2] += thrust_order.z
      ]
      thrust_order = { x: 0, y: 0, z: 0 }
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
    // 

    // 
    // 
    // 
    // 
    // UPDATE TICKS
    // Update local tick time
    local_time = local_time + 1
    var cur_pos_x = mesh.position.x
    var cur_pos_y = mesh.position.y
    var cur_pos_z = mesh.position.z
    previous_position = { x: cur_pos_x, y: cur_pos_y, z: cur_pos_z }    // 
  }

  return { mesh, update }
}

export default Spaceship
