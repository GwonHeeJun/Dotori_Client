import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as ICN_CHECK } from 'Assets/Svg/check.svg';
import * as S from './Style';

const AuthLoginArea: React.FC = () => {
    const [isCheck, setIsCheck] = useState(Boolean);
    return (
      <S.Postioner>
        <S.InputArea>
          <S.InputWrapper>
            <S.Title>학생 로그인</S.Title>
            <S.InputForm>
              <S.Input type="email" placeholder="이메일" />
              <S.Input type="password" placeholder="비밀번호" />
              <S.InputRow>
                <S.EmailWrap>
                  <S.Checkbox onClick={() => setIsCheck(!isCheck)}>
                    {isCheck ? <ICN_CHECK /> : null}
                  </S.Checkbox>
                  <S.BoxText>이메일 저장</S.BoxText>
                </S.EmailWrap>
                <S.LoginButton>
                  <S.LoginText>로그인</S.LoginText>
                </S.LoginButton>
              </S.InputRow>
            </S.InputForm>
            <S.Desc>
              이메일 혹은 비밀번호를 잊으셨나요?
              <Link to="#">이메일/비밀번호 찾기</Link>
            </S.Desc>
            <S.Desc>
              아직 계정이 없나요?
              <Link to="/regist">계정 생성하기</Link>
            </S.Desc>
          </S.InputWrapper>
        </S.InputArea>
      </S.Postioner>
    )
}

export default AuthLoginArea;
