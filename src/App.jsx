import './App.css'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience.jsx";

function App() {
    return (
        <Canvas
            shadows={false}
            camera={{
            fov: 64,
            position:[3, 2.5, 0],

        }}>
            <Experience />
        </Canvas>
    );
}

export default App;
