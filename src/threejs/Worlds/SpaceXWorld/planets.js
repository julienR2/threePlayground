// distance_to_ref: in million of kms -- thousands
// speed: in km/h
// diameter: in km

export default {
  mercury: {
    planet_code: 'mercury',
    ref: 'star_sun',
    distance_to_ref: 57,
    diameter: 4878,
    mass: 3285, // 3,285 × 10^23 kg
    orbit_revolution: 364.25,
    rotation_period: 58.6,
  },
  venus: {
    planet_code: 'venus',
    ref: 'star_sun',
    distance_to_ref: 108.208,
    diameter: 12104,
    mass: 48670, // 4,867 × 10^24 kg
    orbit_revolution: 225,
    rotation_period: 241,
  },
  earth: {
    planet_code: 'earth',
    ref: 'star_sun',
    distance_to_ref: 150,
    diameter: 12742,
    mass: 59720, // 5,972 × 10^24 kg
    orbit_revolution: 365.24,
    rotation_period: 1,
  },
  mars: {
    planet_code: 'mars',
    ref: 'star_sun',
    distance_to_ref: 228,
    diameter: 6787,
    mass: 639, // 6,39 × 10^23 kg
    orbit_revolution: 687,
    rotation_period: 1.05,
  },
  jupiter: {
    planet_code: 'jupiter',
    ref: 'star_sun',
    distance_to_ref: 778.4,
    diameter: 139822,
    mass: 18980000, // 1,898 × 10^27
    rotation_period: 0.4,
    orbit_revolution: 4380,
  },
  saturn: {
    planet_code: 'saturn',
    ref: 'star_sun',
    distance_to_ref: 1433.4,
    diameter: 116460,
    mass: 5683000, // 5,683 × 10^26 kg
    orbit_revolution: 10585,
  },
  uranus: {
    planet_code: 'uranus',
    ref: 'star_sun',
    distance_to_ref: 3000,
    diameter: 50724,
    mass: 8681, // 8,681 × 10^25 kg
    orbit_revolution: 30660,
  },
  neptune: {
    planet_code: 'neptune',
    ref: 'star_sun',
    distance_to_ref: 4500.4,
    diameter: 49244,
    mass: 10240, // 1,024 × 10^26 kg
    orbit_revolution: 60225,
  },
  pluto: {
    planet_code: 'pluto',
    ref: 'star_sun',
    planet_type: 'dwarf',
    distance_to_ref: 5900.898440,
    diameter: 2376.6,
    mass: 10240, // 1.30900 × 1022 kilograms
    orbit_revolution: 90520,
  },
  // planet_nine: {
  //   planet_code: 'planet_nine',
  //   ref: 'star_sun',
  //   distance_to_ref: 4500.4,
  //   orbit_revolution: 60225,
  //   diameter: 139822,
  // },
}
