import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";
import Box from "./components/NewBox/Box"
// import Animation  from "./components/animation/animation";
import "../src/App.css"



function App() {
  return (
    <div className="stick-container">
      {/* <Animation/> */}
      <Box/>
    </div>
    // <Canvas
    //   camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 6] }}
    //   style={{ height: "100vh", backgroundColor: "#87CEEB" }}
    // >
    //   <OrbitControls />
    //   <Suspense fallback={null}>
    //     <Box />
    //   </Suspense>
    // </Canvas>
  );
}

export default App;
