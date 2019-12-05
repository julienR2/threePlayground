import { World, Lights } from '../Managers'
import Train from '../Components/Train'

export default class TrainWorld {
  constructor(container) {
    this.world = new World({ container })

    this.world.scene.add(...Lights())
    this.world.scene.add(Train())
  }
}
