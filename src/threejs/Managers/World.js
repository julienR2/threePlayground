import { Clock } from 'three'
import { Scene, Camera, Controls, Renderer } from './'

export default class World {
  constructor({ container, scene, camera, controls, renderer }) {
    this.container = container
    this.scene = scene || Scene()
    this.camera = camera || Camera(this.container)
    this.controls = controls || Controls(this.camera, this.container)
    this.renderer = renderer || Renderer(this.container)
    this.clock = new Clock()
    this.objects = []

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

  addObject(objects) {
    const objs = Array.isArray(objects) ? objects : [objects]
    this.objects.push(...objs)

    this.scene.add(...objs.map(({ mesh }) => mesh))
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

  onUpdate(fn) {
    this.fnUpdate = fn
  }

  update(fn) {
    const delta = this.clock.getDelta()
    this.objects.forEach(object => object.update(delta))

    this.fnUpdate && this.fnUpdate(delta)
  }

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
