import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  return <primitive
    object={model.scene}
    {...props}
  //scale={new Array(3).fill(1)}
  //position={[0, 0, 0]}
  //rotation-y={0}
  />
}

export default Model;