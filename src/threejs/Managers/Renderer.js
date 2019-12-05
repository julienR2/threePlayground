import { WebGLRenderer } from 'three'

const Renderer = container => {
  const renderer = new WebGLRenderer({ antialias: true })

  renderer.setSize(container.clientWidth, container.clientHeight)

  renderer.setPixelRatio(window.devicePixelRatio)

  renderer.gammaFactor = 2.2
  renderer.gammaOutput = true

  renderer.physicallyCorrectLights = true

  return renderer
}

export default Renderer
