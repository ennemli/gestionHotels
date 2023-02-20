import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import '../style/canvas.css'
import * as THREE from 'three'
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
function useEnvTexture(src){
  const texture=useTexture(src)
  texture.mapping = THREE.EquirectangularReflectionMapping
  texture.encoding = THREE.sRGBEncoding
  return texture
}
function EnvSphere() {
  const envRef = useRef(!null)
  const envTexture1 = useEnvTexture('./textures/hotel1.jpeg')
  const envTexture2 = useEnvTexture('./textures/hotel2.jpeg')
  const envTexture3 = useEnvTexture('./textures/hotel3.jpeg')
  const envTexture4 = useEnvTexture('./textures/hotel4.jpeg')

  useFrame(({ clock }) => {
    envRef.current.rotation.y += 0.001

  })

  return <mesh ref={envRef}>
    <sphereGeometry args={[20, 100, 100]} />
    <meshBasicMaterial side={THREE.DoubleSide} color={0xffffff} map={envTexture1} />
  </mesh>
}
function Scene() {


  const orbitRef = useRef(!null)
 
  useEffect(() => {
  })
  
  return (
    <>
      <OrbitControls  ref={orbitRef} enableDamping={true} dampingFactor={0.2} />
      <Environment preset="city" />
      <EnvSphere/>

      {/* }} */}
    </>
  )
}
export default function HotelCanvas() {

  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 2, 0] }}>
      <Scene />
    </Canvas>
  )
}
