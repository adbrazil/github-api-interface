import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName,language}) => {
  return (
    <S.Wrapper>
      <S.WrapperHeader>
      <S.WrapperTitle>{(name.length > 35) ? name.slice(0,35)+'...' : name}</S.WrapperTitle>
      </S.WrapperHeader>
      <S.WrapperFirstRow>
        <S.WrapperFullName>Full name:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {(fullName.length > 25) ? fullName.slice(0,25)+'...' : fullName}
        </S.WrapperLink>
        
        </S.WrapperFirstRow>
        <S.WrapperFirstRow>
        <S.WrapperFullName>Language:</S.WrapperFullName>
        <S.WrapperLanguage>{language}</S.WrapperLanguage>
        </S.WrapperFirstRow>
    </S.Wrapper>
  );
};

export default RepositoryItem;
