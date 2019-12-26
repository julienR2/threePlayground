import { HemisphereLight, DirectionalLight, SphereBufferGeometry, PointLight, MeshStandardMaterial, Mesh } from 'three'

import { colors } from '../constants'

const Lights = scene => {
  // const ambientLight = new HemisphereLight(colors.skyBlueLight, colors.dark, 5)

  // const mainLight = new DirectionalLight(colors.white, 5)
  // mainLight.position.set(10, 10, 10)

  // 
  var size_sun = 2
  var bulbLight, bulbMat
  // Sun radius size :  695510 km
  var bulbGeometry = new SphereBufferGeometry(695510 / 100000, 100, 100);

  // 
  bulbLight = new PointLight(0xffee88, 10, 0, 0);
  bulbMat = new MeshStandardMaterial({
    emissive: 0xffffee,
    emissiveIntensity: 100,
    color: 0x000000
  });
  bulbLight.add(new Mesh(bulbGeometry, bulbMat));
  bulbLight.position.set(0, 0, 0);
  bulbLight.castShadow = true;
  // 
  // return [ambientLight, mainLight, bulbLight]
  // return [mainLight, bulbLight]
  return [bulbLight]
}

export default Lights
