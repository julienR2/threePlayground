import { SphereBufferGeometry, MeshStandardMaterial, Mesh } from 'three'

import { colors } from '../constants'

const Sphere = ({ geo = [1, 20, 20], mat = { color: colors.purple } } = {}) => {
  const geometry = new SphereBufferGeometry(...geo)
  const material = new MeshStandardMaterial(mat)

  const mesh = new Mesh(geometry, material)

  return mesh
}

export default Sphere
