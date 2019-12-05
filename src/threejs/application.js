import { Scene, Camera, Controls, Renderer } from './Managers'

export default class Application {
  constructor({
    container,
    scene = Scene,
    camera = Camera,
    controls = Controls,
    renderer = Renderer,
  }) {
    this.container = container
    this.scene = scene()
    this.camera = camera(this.container)
    this.controls = controls(this.camera, this.container)
    this.renderer = renderer(this.container)

    this.animate = this.animate.bind(this)
    this.update = this.update.bind(this)
    this.render = this.render.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    this.init()
    this.animate()
  }

  init() {
    this.container.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.onWindowResize)
  }

  onWindowResize() {
    console.log('You resized the browser window!')
    const { clientWidth, clientHeight } = this.container

    this.camera.aspect = clientWidth / clientHeight
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(clientWidth, clientHeight)
  }

  animate() {
    this.renderer.setAnimationLoop(() => {
      this.update()
      this.render()
    })
  }

  update() {}

  render() {
    this.renderer.render(this.scene, this.camera)
  }
}
