import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function DistortedBlob({ reducedMotion }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (reducedMotion || !meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += (state.pointer.y * 0.15 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (state.pointer.x * -0.1 - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.4}
      rotationIntensity={reducedMotion ? 0 : 0.5}
      floatIntensity={reducedMotion ? 0 : 0.7}
    >
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#C1602A"
          roughness={0.25}
          metalness={0.1}
          distort={reducedMotion ? 0.22 : 0.4}
          speed={reducedMotion ? 0 : 1.6}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene({ reducedMotion = false }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.1} color="#FAF7F2" />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#2F6F5E" />
      <DistortedBlob reducedMotion={reducedMotion} />
    </Canvas>
  );
}
