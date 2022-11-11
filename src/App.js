import './scss/style.scss';
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';
import Model from './components/Model';
import Floor from './components/Floor';

function App() {

	return (
		<figure>
			<ColorPicker />
			<Canvas
				shadowMap
				style={{ background: '#333' }}
				camera={{ position: [1, 2, 5] }}>
				<axesHelper args={[6]} />
				<Orbit />

				<ambientLight intensity={0.2} />

				<Dragable>
					<Bulb position={[0, 3, 0]} />
				</Dragable>

				<Suspense fallback={null}>
					<Model
						path={`${process.env.PUBLIC_URL}/pony/scene.gltf`}
						scale={new Array(3).fill(1)}
						position={[0, 0, 0]}
						rotation-y={0}
					/>
				</Suspense>
				<Floor position={[0, -4, 0]} />
			</Canvas>
		</figure>
	);
}

export default App;