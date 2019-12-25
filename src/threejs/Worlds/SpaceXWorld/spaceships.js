// distance_to_ref: in million of kms
// speed: in km/h
// diameter: in km



export default {
  elgringo: {
    spaceship_code: 'elgringo',
    active: true,
    takeoff_location: {
      location_code: "earth",
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 65,
      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: -0.951,
          y: 0.95,
          z: 0
        }
      },

    ]
  },
  voyager_one: {
    spaceship_code: 'voyager_one',
    active: true,
    takeoff_location: {
      x: 0,
      y: -655,
      z: 355,
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 0,
      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Mars intercept',
          target_object_code: 'mars'
        },
      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          // x: -0.651,
          // y: 1.75295,
          x: -1.1,
          y: -2.61,
          z: 1.1
        }
      },

    ]
  },
  voyager_two: {
    active: false,
    spaceship_code: 'voyager_two',
    takeoff_location: {
      x: 0,
      y: -755,
      z: 355,
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 400,
      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Earth intercept',
          target_object_code: 'earth'
        },

      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: 3.11,
          y: -2.55,
          z: 1.2
        }
      },

    ]
  },
}
