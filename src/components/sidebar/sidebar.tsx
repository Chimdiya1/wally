import React from 'react'
import { MainSidebar, Upload, Search, ImagesBox } from './sidebar.styles'

export interface SideBarProps {
    
}
 
const SideBar: React.SFC<SideBarProps> = () => {
    return ( 
        <MainSidebar>
            <span>Select image</span>
            <Upload>Upload Image</Upload>
            <Search placeholder="Search for an image" />
            <ImagesBox>stuff</ImagesBox>
        </MainSidebar>
     );
}
 
export default SideBar;