import { EllipseCurve, BufferGeometry, LineBasicMaterial, Line } from 'three'
// import Ellipse from '../Ellipse'


const Orbit = ({
  radius,
} = {}) => {
  const curve = new EllipseCurve(
    0,
    0, // ax, aY
    radius || 150,
    radius || 150,  // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  )


  const points = curve.getPoints(radius * 10)
  const geometry = new BufferGeometry().setFromPoints(points)

  const material = new LineBasicMaterial({ color: "rgb(120, 120, 120)" })

  // Create the final object to add to the scene
  const mesh = new Line(geometry, material)

  return mesh
}

export default Orbit
