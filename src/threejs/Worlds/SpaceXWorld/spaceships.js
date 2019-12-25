// distance_to_ref: in million of kms
// speed: in km/h
// diameter: in km



export default {
  elgringo: {
    spaceship_code: 'elgringo',
    active: true,
    takeoff_location: {
      x: 0,
      y: -615,
      z: 325,
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 120,
        planned_duration: '60', // seconds

      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Earth intercept on 1 feb 2020',
          target_object_code: 'earth'
        },
      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: -1.11,
          y: 5.55,
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
        type: "rendezvous",
        // planne_datetime_start: '01/01/2020:22:23:00:00',
        rendezVous: {
          name: 'Earth intercept',
          target_object_code: 'earth'

        }
      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: -1.11,
          y: 5.55,
          z: 2
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
        datetime_start: 200,
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
          x: -31.11,
          y: 15.55,
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
        datetime_start: 200,

      },
      {
        type: "rendezvous",
        // planne_datetime_start: '01/01/2020:22:23:00:00',
        datetime_start: 400,
        planned_duration: '600', // seconds
        start_engine: false,
        rendezVous: {
          name: 'Earth intercept on 1 feb 2020',
          target_object_code: 'mars'
        },

      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: -7.11,
          y: 17.55,
          z: 0
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
        orbit_center_code: 'sun'
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
        orbit_center_code: 'sun'
      },

    ]
  }
}
