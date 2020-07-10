import React from 'react'
import { TextEdit, SelectBox} from './editText.styles'

export interface EditTextProps {
    
}
 
const EditText: React.SFC<EditTextProps> = () => {
    return ( 
        <TextEdit>
            <SelectBox>
                <option value="0">Font-size</option>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
            </SelectBox>
            <SelectBox>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
            </SelectBox>
            <SelectBox>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
            </SelectBox>
            <SelectBox>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
                <option value="16">16</option>
            </SelectBox>
        </TextEdit>
     );
}
 
export default EditText;