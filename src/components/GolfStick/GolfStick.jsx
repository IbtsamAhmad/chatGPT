import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Vector3, MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";

const swingAnimation = (golferRef, ballRef) => {
  const duration = 0.5; // Duration of the swing animation in seconds
  const initialRotation = golferRef.current.rotation.y;
  const targetRotation = initialRotation + MathUtils.degToRad(90);

  const initialBallPosition = ballRef.current.position.z;
  const targetBallPosition = initialBallPosition - 1;

  const initialBallRotation = ballRef.current.rotation.x;
  const targetBallRotation = MathUtils.degToRad(-90);

  let currentTime = 0;

  const animate = () => {
    currentTime += 1 / 60; // Assuming 60 frames per second

    const progress = Math.min(currentTime / duration, 1);
    const rotation =
      initialRotation + progress * (targetRotation - initialRotation);
    const ballPosition =
      initialBallPosition +
      progress * (targetBallPosition - initialBallPosition);
    const ballRotation =
      initialBallRotation +
      progress * (targetBallRotation - initialBallRotation);

    golferRef.current.rotation.y = rotation;
    ballRef.current.position.z = ballPosition;
    ballRef.current.rotation.x = ballRotation;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

const GoodLookingGolfer = () => {
  const golferRef = useRef();
  const ballRef = useRef();

  return (
    <group ref={golferRef}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1.8, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>

      {/* Legs */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <mesh position={[0, -1.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>

      {/* Arms */}
      <mesh position={[0.45, 1.35, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <mesh position={[-0.45, 1.35, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>

      {/* Golf Club */}
      <mesh position={[-0.6, 1.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshBasicMaterial color="gray" />
      </mesh>
      <mesh position={[-0.6, 0.8, 0.8]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    </group>
  );
};

const App = () => {
  const golferRef = useRef();
  const ballRef = useRef();

  const handleSwing = () => {
    // Trigger the swing animation
    swingAnimation(golferRef, ballRef);
  };

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 10]} angle={0.5} penumbra={1} />
        <GoodLookingGolfer />
        <OrbitControls />
      </Canvas>

      {/* Button to trigger the swing animation */}
      <button onClick={handleSwing}>Swing</button>
    </>
  );
};

export default App;
