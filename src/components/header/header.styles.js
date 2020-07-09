import styled from 'styled-components';

export const Navigation = styled.header`
         background-color: #0d1643;
         height: 50px;
         color:white;
         padding:0px 100px 0px 36px;
         vertical-align:middle;
         display:flex;
         justify-content:space-between;
         align-items:center;
       `;
       
export const Button = styled.button`
         background-color: #1631c3;
         height: 40px;
         width: 120px;
         border: none;
         color: white;
         text-align: center;
         vertical-align: middle;
         margin: 0px 10px;
         transition: background-color .2s ease-in-out;
         &:hover {
           background-color: #647cff;
           cursor: pointer;
         }
       `;
