import { Scene, Camera, Controls, Renderer } from './'

export default class World {
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
    this.destroy = this.destroy.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    this.init()
    this.animate()
  }

  init() {
    this.container.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.onWindowResize)
  }

  onWindowResize() {
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

  cleanMaterial(material) {
    material.dispose()

    for (const key of Object.keys(material)) {
      const value = material[key]
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose()
      }
    }
  }

  destroy() {
    this.renderer.domElement.remove()
    window.removeEventListener('resize', this.onWindowResize)
    this.renderer.dispose()

    this.scene.traverse(object => {
      if (!object.isMesh) return

      object.geometry.dispose()

      if (object.material.isMaterial) {
        this.cleanMaterial(object.material)
      } else {
        for (const material of object.material) this.cleanMaterial(material)
      }
    })

    this.scene.dispose()
  }
}
