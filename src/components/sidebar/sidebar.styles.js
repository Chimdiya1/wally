import styled from 'styled-components';
import { Button } from '../header/header.styles';

export const MainSidebar = styled.div`
         height: calc(100vh - 50px);
         background-color: #111d5e;
         width: 400px;
         padding: 24px;
         
       `;
export const Upload = styled(Button)`
         float:right
       `;

export const Search = styled.input`
    width:100%;
    margin-top:20px;
    border:none;
    height:40px;
    padding:10px;
`;
export const ImagesBox = styled.div`
         width: 100%;
         margin-top: 20px;
         height: 450px;
         padding: 10px 0px;
         overflow-y:scroll;
         display:flex;
         flex-wrap:wrap;
         justify-content:space-between;
         align-items:center;

`;
export const Img = styled.img`
         max-width: 150px;
         margin-right: 10px;
         margin-bottom: 10px;
         transition: all 0.1s ease-in-out;
         &:hover {
           cursor: pointer;
           max-width:148px;
      
         }
       `;

export const Loader = styled.div`
           display: inline-block;
           width: 80px;
           height: 80px;
         &:after {
           position: absolute;
           top: 50%;
           left: calc((400px /2) - 40px);
           content: ' ';
           display: block;
           width: 64px;
           height: 64px;
           margin: 8px;
           border-radius: 50%;
           border: 6px solid rgb(78, 78, 78);
           border-color: rgb(0, 0, 0) transparent rgb(0, 0, 0) transparent;
           animation: lds-dual-ring 1.2s linear infinite;
         }
         @keyframes lds-dual-ring {
           0% {
             transform: rotate(0deg);
           }
           100% {
             transform: rotate(360deg);
           }
         }
         a {
           text-decoration: none;
         }
       `;
