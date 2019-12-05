import { World, Lights } from '../Managers'
import Cube from '../Components/Cube'

export default class CubeWorld {
  constructor(container) {
    this.world = new World({ container })

    this.world.scene.add(...Lights())
    this.world.scene.add(Cube())
  }
}
