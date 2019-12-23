import { EllipseCurve, BufferGeometry, LineBasicMaterial, Line } from 'three'

const Ellipse = () => {
  const curve = new EllipseCurve(
    0,
    0, // ax, aY
    20,
    20, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  )

  const points = curve.getPoints(250)
  const geometry = new BufferGeometry().setFromPoints(points)

  const material = new LineBasicMaterial({ color: 0xff0000 })

  // Create the final object to add to the scene
  const mesh = new Line(geometry, material)

  return mesh
}

export default Ellipse
