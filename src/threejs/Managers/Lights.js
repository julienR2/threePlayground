import { HemisphereLight, DirectionalLight } from 'three'

import { colors } from '../constants'

const Lights = scene => {
  const ambientLight = new HemisphereLight(colors.skyBlueLight, colors.dark, 5)

  const mainLight = new DirectionalLight(colors.white, 5)
  mainLight.position.set(10, 10, 10)

  return [ambientLight, mainLight]
}

export default Lights
