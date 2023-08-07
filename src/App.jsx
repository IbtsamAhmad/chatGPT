import React, { Suspense } from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

 import GolfModal from "./components/GolfModal/Modal";
 import GolfStick from "./components/GolfStick/GolfStick"
 import Box from "./components/Box/Box"
 import "./App.css"




const App = () => {
  return (
    <div>
      <h1>Modal</h1>
      <div className="stick-container">
        <Box/>
        {/* <GolfStick /> */}
      </div>

      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <GolfModal />
        </Suspense>
        <pointLight position={[-10, -10, -10]} />

        <OrbitControls enableZoom={false} />
      </Canvas> */}
    </div>
  );
}

export default App;
