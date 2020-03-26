import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as ICN_CHECK } from 'Assets/Svg/check.svg';
import * as S from './Style';

const AuthRegistArea: React.FC = () => {
    const [isCheck, setIsCheck] = useState(Boolean);
    return (
      <S.Postioner>
        <S.InputArea>
          <S.InputWrapper>
            <S.Title>학생 계정 생성</S.Title>
            <S.InputForm>
              <S.Input type="email" placeholder="이메일" />
              <S.Input type="password" placeholder="비밀번호" />
              <S.Input type="password" placeholder="비밀번호 확인" />
              <S.Input type="password" placeholder="학생 인증 코드" />
              <S.EmailWrap>
                <S.Checkbox onClick={() => setIsCheck(!isCheck)}>
                  {isCheck ? <ICN_CHECK /> : null}
                </S.Checkbox>
                <S.BoxText>
                  <Link to="/#">이용약관,</Link>
                  <Link to="#">개인정보취급방침</Link>
                  에 동의합니다.
                </S.BoxText>
              </S.EmailWrap>
              <S.LoginButton>
                <S.LoginText>로그인</S.LoginText>
              </S.LoginButton>
            </S.InputForm>
          </S.InputWrapper>
        </S.InputArea>
      </S.Postioner>
    )
}

export default AuthRegistArea;
