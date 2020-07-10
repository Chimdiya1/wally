import React from 'react'
import {Canvas} from './editCanvas.styles'
export interface EditCanvasProps {
    
}
 
const EditCanvas: React.SFC<EditCanvasProps> = () => {
    return ( 
        <Canvas width={500}
        height={500}
        style={{
          border: '2px solid #000',
          marginTop: 10,
        }}>
        </Canvas>
     );
}
 
export default EditCanvas;