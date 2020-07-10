import React from 'react';
import './App.css';
import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar';
import EditArea from './components/editArea/editArea';

export interface AppProps {
  
}
 
const App: React.SFC<AppProps> = () => {
  return ( 
    <div>
      <Header />
      <div className='content'>
        <SideBar />
        <EditArea /> 
      </div>
    </div>
   );
}
 
export default App;
