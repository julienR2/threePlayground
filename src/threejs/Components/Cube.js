import { BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three'

import { colors } from '../constants'

const Cube = ({
  sideSize = 1,
  LengthArrow,
  WidthArrow,
  HeightArrow,
} = {}) => {
  const geometry = new BoxBufferGeometry(LengthArrow || sideSize, WidthArrow || sideSize, HeightArrow || sideSize)
  const material = new MeshStandardMaterial({ color: colors.purple })

  const mesh = new Mesh(geometry, material)



  return mesh
}

export default Cube
