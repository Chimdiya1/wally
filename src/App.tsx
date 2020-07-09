import React from 'react';
import './App.css';
import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar';

export interface AppProps {
  
}
 
const App: React.SFC<AppProps> = () => {
  return ( 
    <div>
      <Header />
      <SideBar/>
    </div>
   );
}
 
export default App;
