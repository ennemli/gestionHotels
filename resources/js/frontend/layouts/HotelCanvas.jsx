import { Environment, Lightformer, OrbitControls, Stats, useTexture } from "@react-three/drei";
import '../style/canvas.css'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Hotel from "../components/Hotel";
import { folder, useControls } from "leva";
import { useEffect, useRef } from "react";
function Scene() {
  const { camera } = useThree()
  const envRef= useRef()
  const envTexture=useTexture("./texture-1.jpg")
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
  useFrame(({clock})=>{
    const shader=envRef.current.userData.shader
    if(shader){
      shader.uniforms.time.value=clock.getElapsedTime()
    }
  })

  return (
    <>
      <OrbitControls />
      <directionalLight args={[new THREE.Color(lightColor), lightIntensity]} />
      <fogExp2 args={[new THREE.Color(fogColor), fogIntensity]} />
      {/* <Stats showPanel={0}> */}

      <Hotel/>
      {/* <Environment background> */}
        <mesh ref={envRef}>
          <sphereGeometry args={[50,100,100]}/>
          <meshNormalMaterial  onBeforeCompile={(shader)=>{
            shader.uniforms={
              ...shader.uniforms,
              time:{
                value:0
              }
            }
            shader.vertexShader='uniform float time;\n'+shader.vertexShader;
            // shader.vertexShader=shader.vertexShader.replace("#include <begin_vertex>",`
            // #include <begin_vertex>
            // transformed.x+=cos(transformed.y*time);
            // transformed.y+=sin(transformed.z*time);
            // `)
            // shader.fragmentShader='varying vec2 vuv;\n'+shader.vertexShader;

            // shader.fragmentShader=shader.fragmentShader.replace(
            //   'gl_FragColor = vec4( packNormalToRGB( normal ), opacity );',`
            //   float len=length(vuv);
            //   float angle=atan(vuv.y,vuv.x*len);
            //   vec2 colUv=vec2(cos(angle),sin(angle));
            //   vec3 col=packNormalToRGB( normal );
            //   gl_FragColor = vec4( col.rg+colUv,col.b, opacity );

            //   `
            // )
            envRef.current.userData.shader=shader
          }} side={THREE.DoubleSide}/>
        </mesh>
      {/* </Environment> */}
    {/* </Stats> */}
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
