import React from 'react';

import LeftNavigator from 'Containers/RecycleContainer/LeftNavigator/LeftNavigator';
import UserProfile from 'Containers/RecycleContainer/UserProfile/UserProfile';
import * as S from './Style';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <S.Postioner>
      <S.LeftDivision>
        <LeftNavigator />
      </S.LeftDivision>
      <S.MiddleDivision>
        {children}
      </S.MiddleDivision>
      <S.RightDivision>
        <UserProfile />
      </S.RightDivision>
    </S.Postioner>
  )
}

export default MainTemplate;
