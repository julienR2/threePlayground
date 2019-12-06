import { Vector3 } from 'three'

import loadModel from '../utils/loadModel'

const Parrot = scene => {
  const position = new Vector3(0, 0, 2.5)
  loadModel('models/parrot.glb', position).then(parrot => {
    scene.add(parrot.model)
  })
}

export default Parrot
