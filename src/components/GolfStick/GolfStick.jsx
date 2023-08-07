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
  PivotControls
} from "@react-three/drei";

import * as THREE from "three";
import { data } from "./FaceOn";
import { useControls } from "leva";
const swingAnimation = (golferRef, ballRef) => {
  const duration = 0.5; // Duration of the swing animation in seconds
  const initialRotation = golferRef.current.rotation.y;
  const targetRotation = initialRotation + MathUtils.degToRad(90);

  const initialBallPosition = ballRef.current.position.z;
  const targetBallPosition = initialBallPosition - 1;

  const initialBallRotation = ballRef.current.rotation.x;
  const targetBallRotation = MathUtils.degToRad(-90);

  let currentTime = 0;

  // const animate = () => {
  //   currentTime += 1 / 60; // Assuming 60 frames per second

  //   const progress = Math.min(currentTime / duration, 1);
  //   const rotation =
  //     initialRotation + progress * (targetRotation - initialRotation);
  //   const ballPosition =
  //     initialBallPosition +
  //     progress * (targetBallPosition - initialBallPosition);
  //   const ballRotation =
  //     initialBallRotation +
  //     progress * (targetBallRotation - initialBallRotation);

  //   golferRef.current.rotation.y = rotation;
  //   ballRef.current.position.z = ballPosition;
  //   ballRef.current.rotation.x = ballRotation;

  //   if (progress < 1) {
  //     requestAnimationFrame(animate);
  //   }
  // };

  // animate();
};

const GoodLookingGolfer = ({ frameValue, framesLoop , modalOpacity}) => {
  const golferRef = useRef();
  // const ballRef = useRef();

  const lineWidth = 12;
  const sphereRadius = 0.04;
  const bonesColor = "#006AB3";
  const sphereColor = "#7BB728";

  function getMidpoint(point1, point2) {
    const midpointX = (point1[0] + point2[0]) / 2;
    const midpointY = (point1[1] + point2[1]) / 2;
    const midpointZ = (point1[2] + point2[2]) / 2;
    return [midpointX, midpointY, midpointZ];
  }

  function addValueToPoints(point1, point2, value) {
    const midpointX = point1[0] - point2[0];
    const midpointY = point1[1] - point2[1];
    const midpointZ = point1[2] - point2[2];
    const pPlus = [midpointX * value, midpointY * value, midpointZ * value];
    const pEnd = [
      point2[0] + pPlus[0],
      point2[1] + pPlus[1],
      point2[2] + pPlus[2],
    ];
    const pStart = [
      point1[0] - pPlus[0],
      point1[1] - pPlus[1],
      point1[2] - pPlus[2],
    ];
    return [pStart, pEnd];
  }

  function computeCOM(value) {
    // Define joints
    const pelvis = data?.data[0][value];
    const hip_r = data?.data[1][value];
    const knee_r = data?.data[2][value];
    const ankle_r = data?.data[3][value];
    const foot_r = data?.data[4][value];
    const hip_l = data?.data[6][value];
    const knee_l = data?.data[7][value];
    const ankle_l = data?.data[8][value];
    const foot_l = data?.data[9][value];
    const shoulder_r = data?.data[14][value];
    const elbow_r = data?.data[15][value];
    const wrist_r = data?.data[16][value];
    const hand_r = data?.data[17][value];
    const shoulder_l = data?.data[18][value];
    const elbow_l = data?.data[19][value];
    const wrist_l = data?.data[20][value];
    const hand_l = data?.data[21][value];
    const neck = data?.data[22][value];
    const skullbase = data?.data[23][value];
    const skull = data?.data[24][value];

    // Compute center of mass of each segment
    let V = [
      skull[0] - skullbase[0],
      skull[1] - skullbase[1],
      skull[2] - skullbase[2],
    ];
    const factor = 0.5976;
    const head_COM = [
      skull[0] - V[0] * factor,
      skull[1] - V[1] * factor,
      skull[2] - V[2] * factor,
    ];

    V = [neck[0] - pelvis[0], neck[1] - pelvis[1], neck[2] - pelvis[2]];
    const factor2 = 0.4486;
    const trunk_COM = [
      neck[0] - V[0] * factor2,
      neck[1] - V[1] * factor2,
      neck[2] - V[2] * factor2,
    ];

    V = [
      shoulder_r[0] - elbow_r[0],
      shoulder_r[1] - elbow_r[1],
      shoulder_r[2] - elbow_r[2],
    ];
    const factor3 = 0.5772;
    const arm_r_COM = [
      shoulder_r[0] - V[0] * factor3,
      shoulder_r[1] - V[1] * factor3,
      shoulder_r[2] - V[2] * factor3,
    ];

    V = [
      elbow_r[0] - wrist_r[0],
      elbow_r[1] - wrist_r[1],
      elbow_r[2] - wrist_r[2],
    ];
    const factor4 = 0.4574;
    const forearm_r_COM = [
      elbow_r[0] - V[0] * factor4,
      elbow_r[1] - V[1] * factor4,
      elbow_r[2] - V[2] * factor4,
    ];

    V = [
      wrist_r[0] - hand_r[0],
      wrist_r[1] - hand_r[1],
      wrist_r[2] - hand_r[2],
    ];
    const factor5 = 0.79;
    const hand_r_COM = [
      wrist_r[0] - V[0] * factor5,
      wrist_r[1] - V[1] * factor5,
      wrist_r[2] - V[2] * factor5,
    ];

    const Varm_l_COM = shoulder_l.map((value, index) => value - elbow_l[index]);
    const factorarm_l_COM = 0.5772;
    const arm_l_COM = shoulder_l.map(
      (value, index) => value - Varm_l_COM[index] * factorarm_l_COM
    );

    const Vforearm_l_COM = elbow_l.map(
      (value, index) => value - wrist_l[index]
    );
    const factorforearm_l_COM = 0.4574;
    const forearm_l_COM = elbow_l.map(
      (value, index) => value - Vforearm_l_COM[index] * factorforearm_l_COM
    );

    const Vhand_l_COM = wrist_l.map((value, index) => value - hand_l[index]);
    const factorhand_l_COM = 0.79;
    const hand_l_COM = wrist_l.map(
      (value, index) => value - Vhand_l_COM[index] * factorhand_l_COM
    );

    const VThighRCOM = hip_r.map((value, index) => value - knee_r[index]);
    const factorThighRCOM = 0.4095;
    const thigh_r_COM = hip_r.map(
      (value, index) => value - VThighRCOM[index] * factorThighRCOM
    );

    const Vshank_r_COM = knee_r.map((value, index) => value - ankle_r[index]);
    const factorshank_r_COM = 0.4459;
    const shank_r_COM = knee_r.map(
      (value, index) => value - Vshank_r_COM[index] * factorshank_r_COM
    );

    const Vfoot_r_COM = ankle_r.map((value, index) => value - foot_r[index]);
    const factorfoot_r_COM = 0.4415;
    const foot_r_COM = ankle_r.map(
      (value, index) => value - Vfoot_r_COM[index] * factorfoot_r_COM
    );

    const Vthigh_l_COM = hip_l.map((value, index) => value - knee_l[index]);
    const factorthigh_l_COM = 0.4095;
    const thigh_l_COM = hip_l.map(
      (value, index) => value - Vthigh_l_COM[index] * factorthigh_l_COM
    );

    const Vshank_l_COM = knee_l.map((value, index) => value - ankle_l[index]);
    const factorshank_l_COM = 0.4459;
    const shank_l_COM = knee_l.map(
      (value, index) => value - Vshank_l_COM[index] * factorshank_l_COM
    );

    const Vfoot_l_COM = ankle_l.map((value, index) => value - foot_l[index]);
    const factorfoot_l_COM = 0.4415;
    const foot_l_COM = ankle_l.map(
      (value, index) => value - Vfoot_l_COM[index] * factorfoot_l_COM
    );

    // Compute mass (%) of each segment
    const head_m = 6.94 / 100;
    const trunk_m = 43.36 / 100;
    const arm_r_m = 2.71 / 100;
    const forearm_r_m = 1.62 / 100;
    const hand_r_m = 0.61 / 100;
    const thigh_r_m = 14.16 / 100;
    const shank_r_m = 4.33 / 100;
    const foot_r_m = 1.37 / 100;
    const arm_l_m = 2.71 / 100;
    const forearm_l_m = 1.62 / 100;
    const hand_l_m = 0.61 / 100;
    const thigh_l_m = 14.16 / 100;
    const shank_l_m = 4.33 / 100;
    const foot_l_m = 1.37 / 100;

    // Compute normal center of mass
    const val1 = head_COM.map((coord) => coord * head_m);
    const val2 = trunk_COM.map((coord) => coord * trunk_m);
    const val3 = arm_r_COM.map((coord) => coord * arm_r_m);
    const val4 = forearm_r_COM.map((coord) => coord * forearm_r_m);
    const val5 = hand_r_COM.map((coord) => coord * hand_r_m);
    const val6 = thigh_r_COM.map((coord) => coord * thigh_r_m);
    const val7 = shank_r_COM.map((coord) => coord * shank_r_m);
    const val8 = foot_r_COM.map((coord) => coord * foot_r_m);
    const val9 = arm_l_COM.map((coord) => coord * arm_l_m);
    const val10 = forearm_l_COM.map((coord) => coord * forearm_l_m);
    const val11 = hand_l_COM.map((coord) => coord * hand_l_m);
    const val12 = thigh_l_COM.map((coord) => coord * thigh_l_m);
    const val13 = shank_l_COM.map((coord) => coord * shank_l_m);
    const val14 = foot_l_COM.map((coord) => coord * foot_l_m);

    const com = [
      val1[0] +
        val2[0] +
        val3[0] +
        val4[0] +
        val5[0] +
        val6[0] +
        val7[0] +
        val8[0] +
        val9[0] +
        val10[0] +
        val11[0] +
        val12[0] +
        val13[0] +
        val14[0],
      val1[1] +
        val2[1] +
        val3[1] +
        val4[1] +
        val5[1] +
        val6[1] +
        val7[1] +
        val8[1] +
        val9[1] +
        val10[1] +
        val11[1] +
        val12[1] +
        val13[1] +
        val14[1],
      val1[2] +
        val2[2] +
        val3[2] +
        val4[2] +
        val5[2] +
        val6[2] +
        val7[2] +
        val8[2] +
        val9[2] +
        val10[2] +
        val11[2] +
        val12[2] +
        val13[2] +
        val14[2],
    ];
    // console.log("com", com)
    return com;
  }

  let COMArray = [];
  for (let index = 0; index < data?.data[0].length; index++) {
    const element = computeCOM(index);
    COMArray.push(element);
  }
  const radius = 0.1;
 

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
    const scale = new THREE.Vector3(radius, distance / 1, radius);

    return {
      position,
      rotation,
      scale,
    };
  };

  const CylinderBetweenPoints = ({ start, end, radius }) => {
    
    let startOne = new THREE.Vector3(start[0], start[1], start[2]); // Starting point
    let endOne = new THREE.Vector3(end[0], end[1], end[2]); // Ending point

     const direction = new THREE.Vector3().subVectors(endOne, startOne);
     const distance = direction.length();
     const position = startOne.clone().add(direction.multiplyScalar(0.5));
     const rotation = new THREE.Euler().setFromQuaternion(
       new THREE.Quaternion().setFromUnitVectors(
         new THREE.Vector3(0, 1, 0),
         direction.clone().normalize()
       )
     );
    const cylinderProps = createCylinderBetweenPoints(startOne, endOne, radius);
    const scale = new THREE.Vector3(radius, distance / 2, radius);

    return (
      <>
        <mesh
          position={cylinderProps.position}
          rotation={cylinderProps.rotation}
        >
          <cylinderGeometry
            args={[0.05, 0.05, cylinderProps.scale.y - 0.06, 5]}
          />
          <meshStandardMaterial color={bonesColor} roughness={2} />
        </mesh>
      </>
    );
  };

    // const config = useControls({
    //   backside: false,
    //   samples: { value: 16, min: 1, max: 32, step: 1 },
    //   resolution: { value: 256, min: 64, max: 2048, step: 64 },
    //   transmission: { value: 0.95, min: 0, max: 1 },
    //   roughness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    //   clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
    //   clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    //   thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    //   backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
    //   ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    //   chromaticAberration: { value: 1, min: 0, max: 1 },
    //   anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
    //   distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    //   distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    //   temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    //   attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    //   attenuationColor: "#ffffff",
    //   color: "#ffffff",
    // });

  return (
    <group
      ref={golferRef}
      scale={15.033}
      rotation={[5, 0, 0]}
      position={[30, -1, 0]}
      // config={config}
    >

        <CylinderBetweenPoints
          start={data?.data[1][frameValue]}
          end={data?.data[2][frameValue]}
          radius={radius}
        />
        <Line
          points={addValueToPoints(
            data?.data[1][frameValue],
            data?.data[6][frameValue],
            3
          )}
          color="yellow"
          lineWidth={4}
          segments
          dashed={false}
        />
        <Line
          points={addValueToPoints(
            data?.data[7][frameValue],
            data?.data[2][frameValue],
            2
          )}
          color="yellow"
          lineWidth={4}
          segments
          dashed={false}
        />
        <Line
          points={addValueToPoints(
            data?.data[18][frameValue],
            data?.data[14][frameValue],
            2
          )}
          color="yellow"
          lineWidth={4}
          segments
          dashed={false}
        />
        {/* <Line
        points={[data?.data[1][0], data?.data[6][0]]}
        color="black"
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        {/* <mesh>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} attach="material" color="hotpink" />
      </mesh> */}
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[0][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[1][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[2][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[3][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[4][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[5][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        {/* <Sphere args={[sphereRadius, 32, 32]} position={data?.data[6][0]}>
        <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
      </Sphere> */}
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[7][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[8][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[9][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[10][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        {/* <Sphere args={[sphereRadius, 32, 32]} position={data?.data[11][0]}>
        <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
      </Sphere> */}
        {/* <Sphere args={[sphereRadius, 32, 32]} position={data?.data[12][0]}>
        <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
      </Sphere> */}
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[13][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[14][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[15][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[16][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[17][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[18][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        {framesLoop.map((item, i) => {
          return (
            <Line
              key={i}
              points={[data?.data[17][i], data?.data[17][i + 1]]}
              color="red"
              lineWidth={2}
              segments
              dashed={false}
            />
          );
        })}
        {framesLoop.map((item, i) => {
          return (
            <Line
              key={i}
              points={[COMArray[i], COMArray[i + 1]]}
              color="magenta"
              lineWidth={2}
              segments
              dashed={false}
            />
          );
        })}
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[19][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[20][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[21][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[22][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        <Sphere
          args={[sphereRadius, 32, 32]}
          position={data?.data[23][frameValue]}
        >
          <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color={sphereColor} />
        </Sphere>
        {/* Head */}
        <Sphere
          args={[0.13, 32, 32]}
          position={getMidpoint(
            data?.data[27][frameValue],
            data?.data[28][frameValue]
          )}
        >
          <meshBasicMaterial   
          opacity={modalOpacity ? 1 : 0.3} color={"#014b7c"} transparent={true} />
        </Sphere>
        {/* <Sphere args={[sphereRadius, 32, 32]} position={data?.data[25][0]}>
        <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color="blue" />
      </Sphere> */}
        {/* <Cylinder
        args={[0.05, 0.05, 0.1, 16]}
        position={getMidpoint(
          data?.data[0][frameValue],
          data?.data[1][frameValue]
        )}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={"red"} roughness={0.7} />
      </Cylinder> */}
        <CylinderBetweenPoints
          start={data?.data[0][frameValue]}
          end={data?.data[1][frameValue]}
          radius={radius}
        />
        {/* <Line
        points={[data?.data[0][frameValue], data?.data[1][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        {/* <Line
        points={[data?.data[1][frameValue], data?.data[2][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        {/* <Line
        points={[data?.data[2][frameValue], data?.data[3][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[3][frameValue], data?.data[4][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[0][frameValue], data?.data[6][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        <CylinderBetweenPoints
          start={data?.data[2][frameValue]}
          end={data?.data[3][frameValue]}
          radius={radius}
        />{" "}
        <CylinderBetweenPoints
          start={data?.data[3][frameValue]}
          end={data?.data[4][frameValue]}
          radius={radius}
        />{" "}
        <CylinderBetweenPoints
          start={data?.data[0][frameValue]}
          end={data?.data[6][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[6][frameValue]}
          end={data?.data[7][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[7][frameValue]}
          end={data?.data[8][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[8][frameValue]}
          end={data?.data[9][frameValue]}
          radius={radius}
        />
        {/* <Line
        points={[data?.data[6][frameValue], data?.data[7][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[7][frameValue], data?.data[8][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[8][frameValue], data?.data[9][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        <CylinderBetweenPoints
          start={data?.data[14][frameValue]}
          end={data?.data[15][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[15][frameValue]}
          end={data?.data[16][frameValue]}
          radius={radius}
        />
        {/* <Line
        points={[data?.data[14][frameValue], data?.data[15][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[15][frameValue], data?.data[16][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        <CylinderBetweenPoints
          start={data?.data[16][frameValue]}
          end={data?.data[17][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[18][frameValue]}
          end={data?.data[19][frameValue]}
          radius={radius}
        />
        {/* <Line
        points={[data?.data[16][frameValue], data?.data[17][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[18][frameValue], data?.data[19][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        {/* <Line
        points={[data?.data[19][frameValue], data?.data[20][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[20][frameValue], data?.data[21][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[0][frameValue], data?.data[12][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[12][frameValue], data?.data[22][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        <CylinderBetweenPoints
          start={data?.data[19][frameValue]}
          end={data?.data[20][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[20][frameValue]}
          end={data?.data[21][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[0][frameValue]}
          end={data?.data[12][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[12][frameValue]}
          end={data?.data[22][frameValue]}
          radius={radius}
        />
        {/* <Line
        points={[data?.data[14][frameValue], data?.data[18][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[13][frameValue], data?.data[22][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      />
      <Line
        points={[data?.data[22][frameValue], data?.data[23][frameValue]]}
        color={bonesColor}
        lineWidth={lineWidth}
        segments
        dashed={false}
      /> */}
        <CylinderBetweenPoints
          start={data?.data[14][frameValue]}
          end={data?.data[18][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[13][frameValue]}
          end={data?.data[23][frameValue]}
          radius={radius}
        />
        <CylinderBetweenPoints
          start={data?.data[22][frameValue]}
          end={data?.data[23][frameValue]}
          radius={radius}
        />
        {/* <Cylinder args={[0.5, 0.5, 0.5]} position={[0, 2, 0]}>
        <meshStandardMaterial color="blue" />
      </Cylinder> */}
        {/* Head */}
        {/* Legs */}
        {/* <mesh position={[0, 0.2, 0]}>
     
        <meshBasicMaterial   transparent={true}
          opacity={modalOpacity ? 1 : 0.3} color="black" />
      </mesh> */}
        {/* Golf ball */}
        {/* <mesh position={[1, 2.75, 0]}>
        <sphereBufferGeometry args={[0.1]} />
        <meshStandardMaterial color="red" />
      </mesh> */}
        {/* Golf club head */}
        {/* <mesh position={[1, 0, 0]}>
        <boxBufferGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="gray" />
      </mesh> */}
        {/* Golf club shaft */}
        {/* <mesh position={[1, 1, 0]}>
        <cylinderBufferGeometry args={[0.1, 0.1, 2, 8]} />
        <meshStandardMaterial color="gray" />
      </mesh> */}
        {/* <mesh position={[1, 0.75, 0]}>
        <cylinderBufferGeometry args={[0.1, 0.1, 2, 8]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}

    </group>
  );
};

const App = () => {
  const golferRef = useRef();
  const ballRef = useRef();
  const [frameValue, setFrameValue] = useState(0);
  const [framesLoop, setFramesLoop] = useState([]);
    const [modalOpacity, setModalOpacity] = useState(true);



  const onRangeHandler = (e) => {
    setFrameValue(e.target.value);
    let loopFinal = new Array(+e.target.value).fill(0);
    setFramesLoop(loopFinal);
  };



  return (
    <>
      <div>
        <button onClick={() => setModalOpacity(!modalOpacity)}>Solid</button>
      </div>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 90], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 10]} angle={0.5} penumbra={1} />
        <PivotControls
          scale={5}
          activeAxes={[true, true, false]}
          offset={[-20, -5, 0]}
        >
          <GoodLookingGolfer
            frameValue={frameValue}
            framesLoop={framesLoop}
            modalOpacity={modalOpacity}
          />
        </PivotControls>

        <OrbitControls enableZoom={true} />
      </Canvas>

      {/* Button to trigger the swing animation */}
      <input
        type="range"
        style={{ width: "100%" }}
        min={0}
        max={480}
        value={frameValue}
        onChange={onRangeHandler}
      ></input>
    </>
  );
};

export default App;
