import Application from '../application'
import { Lights } from '../Managers'
import Cube from '../Components/Cube'

export default class CubeWorld {
  constructor(container) {
    this.application = new Application({ container })

    this.application.scene.add(...Lights())
    this.application.scene.add(Cube())
  }
}
