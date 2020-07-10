import React from 'react'
import { Area } from './editArea.styles'
import EditText from '../editText/editText'
import EditImage from '../editImage/editImage'
import EditCanvas from '../editCanvas/editCanvas'
export interface EditAreaProps {
    
}
 
const EditArea: React.SFC<EditAreaProps> = () => {
    return ( 
        <Area>
            <EditText />
            <EditCanvas/>
            <EditImage/>
        </Area>
     );
}
 
export default EditArea;