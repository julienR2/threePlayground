// distance_to_ref: in million of kms
// speed: in km/h
// diameter: in km



export default {
  elgringo: {
    spaceship_code: 'elgringo',
    active: true,
    controls: false,
    takeoff_location: {
      location_code: "earth",
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 10,
        duration: 0,
      },
      {
        type: "orbit",
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        initial_thrust: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      {
        type: "wait",
        duration: 140,
      },
      {
        type: "thrust",
        thrust_force: 0.15,
      },
      {
        type: "thrust",
        thrust_force: 0.25,
      },
      {
        type: "wait",
        duration: 3650,
      },
      {
        type: "thrust",
        thrust_force: -0.25,
      },
      {
        type: "thrust",
        thrust_force: -0.15,
      },
      {
        type: "wait",
        duration: 365,
      },
      {
        type: "thrust",
        thrust_force: -0.25,
      },
      {
        type: "thrust",
        thrust_force: -0.15,
      },
      // {
      //   type: "rendezvous",
      //   rendezVous: {
      //     name: 'Mars intercept',
      //     target_object_code: 'mars'
      //   },
      // },
      // {
      //   type: "geosync",
      //   target_object_code: 'mars'
      // },
      // {
      //   type: "orbit",
      //   orbit_time: 100,
      //   orbit_center_type: 'star',
      //   orbit_center_code: 'sun'
      // },
      // {
      //   type: "rendezvous",
      //   rendezVous: {
      //     name: 'Saturn intercept',
      //     target_object_code: 'saturn'
      //   },
      // },

    ]
  },
  simpelito: {
    spaceship_code: 'explorer',
    active: true,
    controls: true,
    takeoff_location: {
      location_code: "earth",
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 300,
        duration: 0,
      },
      // {
      //   type: "thrust",
      //   thrust_force: 0.15,
      // },
      // {
      //   type: "thrust",
      //   thrust_force: 0.25,
      // },
    ]
  },
  voyager_one: {
    spaceship_code: 'voyager_one',
    active: false,
    takeoff_location: {
      location_code: "earth",
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 365,
        duration: 0,
      },
      {
        type: "orbit",
        orbit_time: 40,
        orbit_center_type: 'star',
        orbit_center_code: 'sun',
        // initial_thrust: {
        //   x: -0.21,
        //   y: 0.65,
        //   z: 0
        // }
      },

    ]
  },
  voyager_two: {
    active: false,
    spaceship_code: 'voyager_two',
    takeoff_location: {
      x: 255,
      y: 0,
      z: 0,
    },
    flight_plan: [
      {
        type: "takeoff",
        datetime_start: 50,
      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Venus intercept',
          target_object_code: 'venus'
        },

      },
      {
        type: "rendezvous",
        rendezVous: {
          name: 'Mercury intercept',
          target_object_code: 'mercury'
        },

      },
      // {
      //   type: "orbit",
      //   orbit_center_type: 'star',
      //   orbit_center_code: 'sun',
      //   initial_thrust: {
      //     x: 3.11,
      //     y: -2.55,
      //     z: 1.2
      //   }
      // },

    ]
  },
}
