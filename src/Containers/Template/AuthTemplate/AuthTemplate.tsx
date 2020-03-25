import React from 'react';
import * as S from './Style';

type TemplateProps = {
    children: JSX.Element[] | JSX.Element;
};

const AuthTemplate: React.FC<TemplateProps> = ({ children }) => {
    return (
      <S.Postioner>
        <S.UserWrapper>
          {children}
        </S.UserWrapper>
        <S.BackgroundWrapper />
      </S.Postioner>
    )
}

export default AuthTemplate;
