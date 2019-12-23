import { SphereBufferGeometry, MeshStandardMaterial, Mesh } from 'three'

import { colors } from '../constants'

const Sphere = ({
  radius = 1,
  geometry = [1, 20, 20],
  material = { color: colors.purple },
} = {}) => {
  const [r, ...geo] = geometry

  const sphereGeometry = new SphereBufferGeometry(...[radius || r, ...geo])
  const standardMaterial = new MeshStandardMaterial(material)

  const mesh = new Mesh(sphereGeometry, standardMaterial)

  return mesh
}

export default Sphere
