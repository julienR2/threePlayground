import { AnimationMixer } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

const loadModel = (modelPath, position) =>
  new Promise((res, rej) => {
    const onLoad = gltf => {
      const model = gltf.scene.children[0]
      model.position.copy(position)
      const mixer = new AnimationMixer(model)
      const animation = gltf.animations[0]
      const action = mixer.clipAction(animation)
      action.play()

      return res({ model, mixer, animation, action })
    }

    const onProgress = () => {}

    const onError = errorMessage => rej(errorMessage)

    loader.load(modelPath, onLoad, onProgress, onError)
  })

export default loadModel
