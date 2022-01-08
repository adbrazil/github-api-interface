import React from "react";
import * as S from "./styled";

const CheckList = ({java}) => {
  return (
    <S.Wrapper>
    <S.WrapperCheck1>Possui Repositório com código {java} </S.WrapperCheck1>
    {/* <S.WrapperCheck2>Possui Repositório com código C#:{CS ? 'V' : 'X'}</S.WrapperCheck2>
    <S.WrapperCheck3>Possui Repositório com código Python: {python ? 'V' : 'X'}</S.WrapperCheck3> */}
    </S.Wrapper>
  );
};

export default CheckList;
