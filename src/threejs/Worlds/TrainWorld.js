import { World, Lights } from '../Managers'
import Train from '../Components/Train'

const TrainWorld = container => {
  const world = new World({ container })

  world.scene.add(...Lights(), Train())
  return world
}

export default TrainWorld
