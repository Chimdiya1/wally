import React from 'react'
import {Navigation,Button} from './header.styles'
export interface HeaderProps {
    
}
 
const Header: React.SFC<HeaderProps> = () => {
    return (
      <Navigation>
        Wally
        <div>
          <Button>Share</Button>
          <Button>Download</Button>
        </div>
      </Navigation>
    );
}
 
export default Header;
