// distance_to_ref: in million of kms
// speed: in km/h
// orbit_revolution_length:  // in earth days
// diameter: in km

export default {
  moon: {
    satellite_code: 'moon',
    referencial_object_code: 'planet_earh',
    distance_to_ref: 0.35641,
    diameter: 3474.2,
  },
  iss: {
    satellite_code: 'iss',
    distance_to_ref: 0.0004,
    speed: 28000,
    diameter: 0.3,
  },
  philae: {
    satellite_code: 'philae',
    referencial_object_code: 'star_sun',
    orbit_revolution_length: 2400,
    distance_to_ref: null,
  },
}
