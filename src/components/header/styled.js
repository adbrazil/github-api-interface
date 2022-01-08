import styled from "styled-components";


export const WrapperSpan = styled.div`
font-weight: bold;
font-size:70px;
color: #ffff;
align-self:center;
`;


export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  //justify-content: space-between;
  justify-content: flex-end;
  padding: 4px;
  //background-color: green;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 30%;
    height: 44px;
    padding: 8px;
    font-weight: 500px;
    background-color:#FFFFFF;

  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
