import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Controls = (camera, container) => {
  const controls = new OrbitControls(camera, container)

  return controls
}

export default Controls
