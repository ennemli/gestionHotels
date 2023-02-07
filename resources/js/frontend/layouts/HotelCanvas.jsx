import { OrbitControls } from "@react-three/drei";
import '../style/canvas.css'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Hotel from "../components/Hotel";
import { folder, useControls } from "leva";
function Scene() {
  const { camera } = useThree()
  const { fogColor, fogIntensity, lightIntensity, lightColor, fov, cameraPosition } = useControls({
    Fog: folder({
      fogColor: "#ffffff",
      fogIntensity: {
        min: 0,
        max: 2,
        step: 0.001,
        value: 0.1
      }
    }),
    Light: folder({
      lightColor: "#333333",
      lightIntensity: {
        min: 0,
        max: 50,
        step: 0.001,
        value: 10
      }
    }),
    cameraSetting: folder({
      fov: {
        min: 0,
        max: 90,
        step: 1,
        value: 45,
        onChange:(v)=>{
          camera.fov=v
          camera.updateProjectionMatrix()
        }
      },
      cameraPosition: {
        value: { x: 0, y: 3, z: 8 },
        onChange: (v) => {
          camera.position.set(v.x,v.y,v.z)
        }
      }
    })
  })

  return (
    <>
      <OrbitControls />
      <directionalLight args={[new THREE.Color(lightColor), lightIntensity]} />
      <fogExp2 args={[new THREE.Color(fogColor), fogIntensity]} />
      <Hotel/>
    </>
  )
}
export default function HotelCanvas() {

  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 2, 8] }}>
      <Scene />
    </Canvas>
  )
}
