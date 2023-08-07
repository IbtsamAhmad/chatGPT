
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, OrbitControls } from '@react-three/drei';

function Box() {
  const map = useTexture([
    "/textures/1.jpg", // pos-x
    "/textures/2.png", // neg-x
    "/textures/3.png", // pos-y
    "/textures/4.png", // neg-y
    "/textures/5.png", // pos-z
    "/textures/6.png", // neg-z
  ]);
  const meshRef = useRef();
//   useFrame((state, delta) => {
//     // adjust object position
//     if (meshRef.current) {
//       meshRef.current.rotation.x += delta / 2;
//       meshRef.current.rotation.y += delta;
//     }
//   });
  
  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[3, 3, 3]} />
      {map.map((texture, idx) => (
        <meshBasicMaterial
          key={texture.id}
          attach={`material-${idx}`}
          map={texture}
          side={THREE.FrontSide}
        />
      ))}
    </mesh>
  );
}

function App() {
  return (
    <Canvas
      camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 6] }}
      style={{ height: '100vh', backgroundColor: '#87CEEB' }}
    >
        <OrbitControls/>
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  );
}

export default App;
