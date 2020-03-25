import React from 'react';
// Asset
import { ReactComponent as ILLUST_DOMITORI } from 'Assets/Svg/domitori.svg';
// Styling
import * as S from './Style';
// Custom Container & Custom Components
import AuthHeader from 'Components/AuthHeader/AuthHeader';
import AuthTemplate from 'Containers/Template/AuthTemplate/AuthTemplate';
// Frequently used modules and functions
import { historyType } from 'Utils/Types';

type LoginProps = {
    history: historyType
};

const LoginContainer: React.FC<LoginProps> = ({ history }) => {
    return (
        <AuthTemplate>
            <S.UserHeader>
                <AuthHeader isLogo={false} onClick={() => history.go(-1)} />
            </S.UserHeader>
            <S.UserContents>

            </S.UserContents>
            <S.UserFooter>
                <ILLUST_DOMITORI />
            </S.UserFooter>
        </AuthTemplate>
    )
}

export default LoginContainer;