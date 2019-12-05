import { BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three'

import { colors } from '../constants'

const Cube = () => {
  const geometry = new BoxBufferGeometry(2, 2, 2)
  const material = new MeshStandardMaterial({ color: colors.purple })

  const mesh = new Mesh(geometry, material)

  return mesh
}

export default Cube
