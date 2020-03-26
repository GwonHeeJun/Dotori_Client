import React from 'react';
// Asset
import { ReactComponent as ILLUST_DOMITORI } from 'Assets/Svg/domitori.svg';
// Styling
// Custom Container & Custom Components
import AuthHeader from 'Components/AuthHeader/AuthHeader';
import AuthTemplate from 'Containers/Template/AuthTemplate/AuthTemplate';
// Frequently used modules and functions
import { historyType } from 'Utils/Types';
import * as S from './Style';
import AuthRegistArea from 'Components/AuthRegistArea/AuthRegistArea';

type LoginProps = {
    history: historyType
};

const RegistContainer: React.FC<LoginProps> = ({ history }) => {
    return (
      <AuthTemplate>
        <S.UserHeader>
          <AuthHeader isLogo={false} onClick={() => history.go(-1)} />
        </S.UserHeader>
        <S.UserContents>
            <AuthRegistArea />
        </S.UserContents>
        <S.UserFooter>
          <ILLUST_DOMITORI />
        </S.UserFooter>
      </AuthTemplate>
    )
}

export default RegistContainer;
