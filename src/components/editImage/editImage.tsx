import React from 'react'
import {ImageEdit, ImageEditBtn} from './editImage.styles'
export interface EditImageProps {
    
}
 
const EditImage: React.SFC<EditImageProps> = () => {
    return ( 
        <ImageEdit>
            <ImageEditBtn>Greyscale</ImageEditBtn>
            <ImageEditBtn>Greyscale</ImageEditBtn>
            <ImageEditBtn>Greyscale</ImageEditBtn>
            <ImageEditBtn>Greyscale</ImageEditBtn>
        </ImageEdit>
     );
}
 
export default EditImage;