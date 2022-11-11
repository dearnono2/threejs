import './scss/style.scss';
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Box from './components/Box';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';
import Model from './components/Model';

function App() {

	return (
		<figure>
			<ColorPicker />
			<Canvas
				shadowMap
				style={{ background: '#111' }}
				camera={{ position: [3, 5, 3] }}>
				<axesHelper args={[6]} />
				<Orbit />

				<ambientLight intensity={0.2} />

				{/* 드래그하고 싶은 요소를 Dragable컴포넌트로 감싸줌 */}
				<Dragable>
					<Bulb position={[0, 3, 0]} />
				</Dragable>

				<Suspense fallback={null}>
					<Model path={`${process.env.PUBLIC_URL}/house/scene.gltf`} />
				</Suspense>

			</Canvas>
		</figure>
	);
}

export default App;