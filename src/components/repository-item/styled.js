import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  border: 1px solid #000000;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
  background-color:#FFF;
`;


export const WrapperFirstRow  = styled.div`
  display:inline-flex;
  align-items:center;
  width:100%;
`;


export const WrapperHeader  = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius:10px;
  border-bottom: 1px solid #ccc;
  background-color:#3386FF;

`;

export const WrapperLanguage  = styled.h2`

font-size: 20px;
font-weight: bold;
padding-left:3px;
margin: 8px 0;
color: #2d3748;

`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  //margin: 8px 0;
  padding-left:5px;
  padding-top:10px;
  padding-bottom:10px;
  color: #FFFFFF;
`;

export const WrapperFullName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding-left:3px;
  margin: 8px 0;
  color: #2d3748;
`;

export const WrapperLink = styled.a`
  font-size: 20px;
  font-weight: bold;
  margin-left:5px;
  //margin: 8px 0;
  //padding-left:3px;
  color: #3182ce;
`;
