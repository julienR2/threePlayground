import { CylinderBufferGeometry, BoxBufferGeometry, Mesh, Math } from 'three'

import meshStandardMaterial from '../../Materials/meshStandardMaterial'
import { colors } from '../../constants'

const bodyMaterial = meshStandardMaterial({ color: colors.red })
const detailMaterial = meshStandardMaterial({ color: colors.darkgrey })

export const Nose = () => {
  const geometry = new CylinderBufferGeometry(0.75, 0.75, 3, 12)

  const nose = new Mesh(geometry, bodyMaterial)
  nose.rotation.z = Math.degToRad(90)
  nose.position.x = -1

  return nose
}

export const Cabin = () => {
  const geometry = new BoxBufferGeometry(2, 2.25, 1.5)

  const cabin = new Mesh(geometry, bodyMaterial)
  cabin.position.set(1.5, 0.4, 0)

  return cabin
}

export const Chemney = () => {
  const geometry = new CylinderBufferGeometry(0.3, 0.1, 0.5)

  const chimney = new Mesh(geometry, detailMaterial)
  chimney.position.set(-2, 0.9, 0)

  return chimney
}

export const SmallWheelRear = () => {
  const geometry = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16)
  geometry.rotateX(Math.degToRad(90))

  const smallWheelRear = new Mesh(geometry, detailMaterial)
  smallWheelRear.position.set(0, -0.5, 0)

  return smallWheelRear
}
