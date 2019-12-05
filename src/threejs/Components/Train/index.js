import { Group } from 'three'

import { Nose, Cabin, Chemney, SmallWheelRear } from './Elements'

const Train = () => {
  const train = new Group()
  const smallWheelRear = SmallWheelRear()

  const SmallWheelCenter = () => {
    const smallWheelCenter = smallWheelRear.clone()
    smallWheelCenter.position.x = -1

    return smallWheelCenter
  }

  const SmallWheelFront = () => {
    const smallWheelFront = smallWheelRear.clone()
    smallWheelFront.position.x = -2

    return smallWheelFront
  }

  const BigWheel = () => {
    const bigWheel = smallWheelRear.clone()
    bigWheel.scale.set(2, 2, 1.25)
    bigWheel.position.set(1.5, -0.1, 0)

    return bigWheel
  }

  train.add(
    Nose(),
    Cabin(),
    Chemney(),
    smallWheelRear,
    SmallWheelCenter(),
    SmallWheelFront(),
    BigWheel()
  )

  return train
}

export default Train
