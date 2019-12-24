import { PerspectiveCamera } from 'three'

const Camera = container => {
  const fov = 35
  const aspect = container.clientWidth / container.clientHeight
  const near = 1
  const far = 1079.2528488 // en million de km, distance en km de 1 année lumière

  const camera = new PerspectiveCamera(fov, aspect, near, far * 100)

  camera.position.set(0, -255, 50)

  return camera
}

export default Camera
