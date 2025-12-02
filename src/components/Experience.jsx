import React from 'react';
import {OrbitControls, Scroll, ScrollControls} from "@react-three/drei";
import {Office} from "./Office.jsx";
import Overlay from "./Overlay.jsx";

export const Experience = () => {
    return (
        <>
         <ambientLight intensity={2}/>
        {/*<OrbitControls enableZoom={false} enableRotate={false}/>*/}
            <ScrollControls   pages={3}
                              damping={0.5}
                              enabled={true}
                              distance={1}
                              infinite={false}
                              horizontal={false}>
          <Office/>
           <Overlay/>
            </ScrollControls>

        </>
    );
};

