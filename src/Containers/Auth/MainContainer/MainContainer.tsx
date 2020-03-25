import React from 'react';
// Custom Container & Custom Components
import AuthTemplate from 'Containers/Template/AuthTemplate/AuthTemplate';
import AuthHeader from 'Components/AuthHeader/AuthHeader';
import AuthContents from 'Components/AuthContents/AuthContents';
// Asset
import { ReactComponent as ILLUST_DOMITORI } from 'Assets/Svg/domitori.svg';
// Styling
import * as S from './Style';

const MainContainer: React.FC = () => {
    return (
      <AuthTemplate>
        <S.UserHeader>
          <AuthHeader isLogo />
        </S.UserHeader>
        <S.UserContents>
          <AuthContents />
        </S.UserContents>
        <S.UserFooter>
          <ILLUST_DOMITORI />
        </S.UserFooter>
      </AuthTemplate>
    )
}

export default MainContainer;
