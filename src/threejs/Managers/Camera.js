import { PerspectiveCamera } from 'three'

const Camera = container => {
  const fov = 35
  const aspect = container.clientWidth / container.clientHeight
  const near = 1
  const far = 100

  const camera = new PerspectiveCamera(fov, aspect, near, far)

  camera.position.set(0, 0, -100)

  return camera
}

export default Camera
