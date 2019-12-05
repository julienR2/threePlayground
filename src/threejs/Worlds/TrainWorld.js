import Application from '../application'
import { Lights } from '../Managers'
import Train from '../Components/Train'

export default class TrainWorld {
  constructor(container) {
    this.application = new Application({ container })

    this.application.scene.add(...Lights())
    this.application.scene.add(Train())
  }
}
