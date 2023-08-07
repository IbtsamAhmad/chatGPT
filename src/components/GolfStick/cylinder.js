import React, { useState, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Vector3, MathUtils } from "three";
import {
  OrbitControls,
  Box,
  Sphere,
  Plane,
  Cylinder,
  Line,
} from "@react-three/drei";
import * as THREE from "three";
import { data } from "./data";

const createCylinderBetweenPoints = (start, end, radius) => {
  const direction = new THREE.Vector3().subVectors(end, start);
  const distance = direction.length();
  const position = start.clone().add(direction.multiplyScalar(0.5));
  const rotation = new THREE.Euler().setFromQuaternion(
    new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    )
  );
  const scale = new THREE.Vector3(radius, distance / 2, radius);

  return {
    position,
    rotation,
    scale,
  };
};

const CylinderBetweenPoints = ({ start, end, radius }) => {
  const cylinderProps = createCylinderBetweenPoints(start, end, radius);

  return (
    <>
      <mesh position={cylinderProps.position} rotation={cylinderProps.rotation}>
        <cylinderGeometry args={[radius, radius, cylinderProps.scale.y, 16]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

const App = () => {
  const start = new THREE.Vector3(-2, 0, 0); // Starting point
  const end = new THREE.Vector3(2, 0, 0); // Ending point
  const radius = 0.1; // Cylinder radius

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <CylinderBetweenPoints start={start} end={end} radius={radius} />
    </Canvas>
  );
};

export default App;
