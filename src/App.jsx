import React, { Suspense } from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

 import GolfModal from "./components/GolfModal/Modal";
 import GolfStick from "./components/GolfStick/GolfStick"




const App = () => {
  return (
    <div style={{ height: "500px" }}>
      <h1>Modal</h1>
      {/* <GolfStick /> */}

      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <GolfModal />
        </Suspense>
        <pointLight position={[-10, -10, -10]} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default App;
