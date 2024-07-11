import React from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box } from "@react-three/drei";
import ComputersCanvas from "./canvas/Computers";

const ThreeScene=()=>{
    return(
        // <Canvas>
        //     <ambientLight  />
        //     <pointLight position={[10,10,10]}/>
        //     <Box position={[0,0,0]} args={[2, 2, 2]}>
        //         <meshStandardMaterial color="hotpink" attach='material' />
        //     </Box>
        //     <OrbitControls/>
        // </Canvas>
        <>
            <ComputersCanvas/>
        </>
    )
}

export default ThreeScene;