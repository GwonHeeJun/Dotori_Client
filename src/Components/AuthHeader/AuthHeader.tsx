import React from 'react';

import * as S from './Style';

type HeaderProps = {
  isLogo: Boolean;
  onClick?: () => void;
}

const AuthHeader: React.FC<HeaderProps> = ({ isLogo, onClick }) => {
  return (
    <S.Postioner>
      {isLogo ? <S.LogoTitle>로고</S.LogoTitle> : <S.LogoTitle onClick={onClick}>돌아가기</S.LogoTitle>}
    </S.Postioner>
  )
}

export default AuthHeader;
