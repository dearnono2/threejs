import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMemo } from 'react';

const Model = (props) => {
  const { nodes, scene } = useLoader(GLTFLoader, props.path);

  useMemo(
    () =>
      Object.values(nodes).forEach(
        (obj) =>
          obj.isMesh &&
          Object.assign(obj, { castShadow: true, receiveShadow: true })
      ),
    [nodes]
  );

  return <primitive
    object={scene}
    {...props}
  />
}

export default Model;