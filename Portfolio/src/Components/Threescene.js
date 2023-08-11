import React, { useRef } from 'react';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

import { Avatar } from './Avatar';



const Threescene = () => {

   const groupRef = useRef();

  // // Load the .glb model with skin
  // const glbData = useLoader(GLTFLoader, './64cd094483cb753a24f129e2.glb');
  // const skinModel = glbData.scene.clone();

  // // Load the .fbx model with animations
  // const fbxData = useLoader(FBXLoader, './SambaDancing.fbx');
  // const animationModel = fbxData;

  // // Merge geometries from both models
  // const mergedGeometry = new THREE.BufferGeometry();
  // skinModel.traverse((child) => {
  //   if (child.isMesh) {
  //     mergedGeometry.mergeMesh(child);
  //   }
  // });

  // // Create an animation mixer and play animations
  // const mixer = new THREE.AnimationMixer(groupRef.current);
  // const animations = animationModel.animations;
  // animations.forEach((clip) => {
  //   const action = mixer.clipAction(clip);
  //   action.play();
  // });

  // // Update animations
  // useFrame((_, delta) => {
  //   mixer.update(delta);
  // });

  return (
    <div className="threescene-container" style={{height:'inherit',width: '100%',margin: '0%', padding: '0', display: 'block' }}>

{/* Canvas should cover entire page */}
      <Canvas style={{height:'90%',marginTop: '0%', padding: '0', display: 'block' }}>
         <group ref={groupRef}>
          <Avatar/>
         {/* <mesh geometry={mergedGeometry} material={skinModel.material} />*/}
        </group> 
        
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

      </Canvas>
    </div>
  );
};

export default Threescene;
