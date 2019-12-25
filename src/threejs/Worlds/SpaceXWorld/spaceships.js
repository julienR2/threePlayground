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
    // takeoff_location: {
    //   x: 0,
    //   y: -615,
    //   z: 325,
    // },
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
    active: true,
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
          x: -3.11,
          y: 1.55,
          z: 2
        }
      },

    ]
  },
  voyager_three: {
    active: false,
    spaceship_code: 'voyager_three',
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 100,
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
          x: -1.2951,
          y: 0.95,
          z: -2
        }
      },

    ]
  },
  voyager_four: {
    active: false,
    spaceship_code: 'voyager_four',
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 0,

      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Earth intercept on 1 feb 2020',
          target_object_code: 'jupiter'
        },

      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: -1.2951,
          y: 0.95,
          z: -2
        }
      },

    ]
  },
  voyager_five: {
    active: false,
    spaceship_code: 'voyager_five',
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 1000,

      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Earth intercept on 1 feb 2020',
          target_object_code: 'earth'
        },

      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Earth intercept on 1 feb 2020',
          target_object_code: 'neptune'
        },

      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: -1.2951,
          y: 0.95,
          z: -2
        }
      },

    ]
  }
}
