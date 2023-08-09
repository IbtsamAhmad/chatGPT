import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useTexture, OrbitControls } from "@react-three/drei";

const BoxWithDimensionsAndColors = () => {


  const [length, setLength] = useState(2);
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [unit, setUnit] = useState("cm");
 const [sideColors, setSideColors] = useState([
   "red",
   "green",
   "blue",
   "yellow",
   "purple",
   "orange",
 ]);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
  
const markerRef = useRef();

const vec = new THREE.Vector3();

    // useEffect(() => {
    //   setCameraPosition([0, 0, 100]);
    // }, [cameraPosition]);




  const handleDimensionChange = (event, setter) => {
    const value = parseFloat(event.target.value);
    setter(value);
  };

  const handleColorChange = (index, color) => {
    // console.log("index", index, color);
    const newColors = [...sideColors];
    newColors[index] = color;
    // console.log("newColors", newColors);
    setSideColors(newColors);
  };

  const handleViewAngle = (angle) => {
  // const position = getCameraPositionForAngle(angle);
  // console.log("position", position);
  console.log("hetrererr")

  setCameraPosition(new THREE.Vector3(0, 1, 50));
  // setCameraPosition(position);
  };


  console.log("cameraPosition", cameraPosition);

  // function Cube() {
  //   const meshRef = useRef();
  //     // useFrame((state) => {
  //     //   meshRef.current.rotation.x =
  //     //     meshRef.current.rotation.y =
  //     //     meshRef.current.rotation.z +=
  //     //       0.01;
  //     // });
  //   return (
  //     <mesh ref={meshRef}>
  //       <boxBufferGeometry args={[3, 3, 3]} />
  //       {sideColors.map((color, idx) => (
  //         <meshBasicMaterial
  //           key={idx}
  //           color={sideColors[idx]}
  //           attach={`material-${idx}`}
  //           // map={texture}
  //           //  side={THREE.FrontSide}
  //         />
  //       ))}
  //     </mesh>
  //   );
  // }

const getCameraPositionForAngle = (angle) => {
  switch (angle) {
    case "left":
      return [5, 0, 0];
    case "right":
      return [-5, 0, 0];
    case "top":
      return [0, 5, 0];
    case "bottom":
      return [0, -5, 0];
    case "front":
      return [0, 0, 5];
    case "back":
      return [0, 0, -5];
    default:
      return [0, 0, 5]; // Default angle
  }
};

const CameraControls = () => {
  // This component uses the useFrame hook to update camera position
  return useFrame(() => {
      // setCameraPosition(new THREE.Vector3(0, 1, 50));
  // setCameraPosition([0, 0, 50]);
  });
};
  return (
    <>
      <h1>New Box</h1>
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        {["left", "right", "top", "bottom", "front", "back"].map(
          (angle, index) => (
            <button key={index} onClick={() => handleViewAngle(angle)}>
              View {angle}
            </button>
          )
        )}
      </div>

      <div style={{ position: "absolute", top: "50px", left: "10px" }}>
        {/* ... */}
        {sideColors.map((color, index) => (
          <div key={index}>
            <label>{`Side ${index + 1} Color: `}</label>
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", top: "240px", left: "10px" }}>
        <div>
          <label>Length: </label>
          <input
            type="number"
            value={length}
            onChange={(e) => handleDimensionChange(e, setLength)}
          />
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="in">in</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
        <div>
          <label>Width: </label>
          <input
            type="number"
            value={width}
            onChange={(e) => handleDimensionChange(e, setWidth)}
          />
        </div>
        <div>
          <label>Height: </label>
          <input
            type="number"
            value={height}
            onChange={(e) => handleDimensionChange(e, setHeight)}
          />
        </div>
      </div>
      <Canvas
      // camera={{
      //   fov: 70,
      //   near: 0.01,
      //   far: 100,
      //   position: cameraPosition,
      // }}
      >
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={cameraPosition}
          fov={90}
          near={0.1}
          far={70}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <CameraControls />
        <mesh ref={markerRef}>
          <Box args={[length, width, height]}>
            {sideColors.map((color, idx) => (
              <meshBasicMaterial
                key={idx}
                color={sideColors[idx]}
                attach={`material-${idx}`}
                // map={texture}
                //  side={THREE.FrontSide}
              />
            ))}
          </Box>
        </mesh>
      </Canvas>
    </>
  );
};

export default BoxWithDimensionsAndColors;
