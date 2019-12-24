import Sphere from '../Sphere'

const Planet = ({
  geometry,
  material,
  radius,
  position = [0, 0, 0],
  orbit = true,
  data,
} = {}) => {
  const mesh = Sphere({ geometry, material, radius })
  // const x = 0
  // const y = (-1 * data.distance_to_ref) / 10
  // const z = 0

  // mesh.position.set(x, y, z)

  const rotation = (2 * Math.PI) / (data.orbit_revolution * 3)

  let theta = 0

  const update = () => {
    theta = theta + rotation

    mesh.position.x = (data.distance_to_ref * Math.cos(theta))
    mesh.position.y = (data.distance_to_ref * Math.sin(theta))
  }

  return { mesh, update }
}

export default Planet
