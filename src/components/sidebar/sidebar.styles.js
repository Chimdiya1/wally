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
    padding:10px
`
export const ImagesBox = styled.div`
         width: 100%;
         margin-top: 20px;
         background-color: #fff;
         height: 450px;
         padding: 10px;
       `;
