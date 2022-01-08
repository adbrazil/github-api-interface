import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import CheckList from "../checkList";
import RepositoryItem from "../repository-item";
import * as S from "./styled";
import { FaStar,FaArchive } from 'react-icons/fa';

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);


  // let temJava = ()=>{

  
  //   githubState.starred.map((item) => {
  //     console.log(item.language)
  //     if(item.language == 'Java'){
  //       return true;
  //     }
  //   })
   
  //   // console.log('saiu')
  //   // return false;
  // }

  return (
    <>
      {hasUserForSearchrepos ? (
        
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab> <FaArchive/> Repositories</S.WrapperTab>
            <S.WrapperTab> <FaStar/> Starred</S.WrapperTab>
            {/* <S.WrapperTab>Check</S.WrapperTab> */}
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                  language={item.language}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
