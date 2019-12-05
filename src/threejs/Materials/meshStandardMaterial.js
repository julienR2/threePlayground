import { MeshStandardMaterial } from 'three'

import { colors } from '../constants'

const defaultConfig = {
  color: colors.red,
  flatShading: true,
}

const meshStandardMaterial = config => {
  const meshConfig = { ...defaultConfig, ...config }
  const mesh = new MeshStandardMaterial(meshConfig)

  if (meshConfig.color) {
    mesh.color.convertSRGBToLinear()
  }

  return mesh
}

export default meshStandardMaterial
