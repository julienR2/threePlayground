import { SphereBufferGeometry, MeshStandardMaterial, Mesh } from 'three'

import { colors } from '../constants'

const Cube = () => {
  const geometry = new SphereBufferGeometry(1, 20, 20)
  const material = new MeshStandardMaterial({ color: colors.purple })

  const mesh = new Mesh(geometry, material)

  return mesh
}

export default Cube
