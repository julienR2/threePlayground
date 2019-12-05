import { PerspectiveCamera } from 'three'

const Camera = container => {
  const fov = 35
  const aspect = container.clientWidth / container.clientHeight
  const near = 0.1
  const far = 100

  const camera = new PerspectiveCamera(fov, aspect, near, far)

  camera.position.set(-5, 5, 7)

  return camera
}

export default Camera
