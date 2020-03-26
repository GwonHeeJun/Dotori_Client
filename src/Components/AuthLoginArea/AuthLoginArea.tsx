import React, { useState, useEffect } from 'react';
// Router
import { Link, Redirect } from 'react-router-dom';
// Asset & Style
import { ReactComponent as ICN_CHECK } from 'Assets/Svg/check.svg';
import * as S from './Style';
// Global State Management
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from 'Actions/User.action';
import { RootState } from 'Reducers';



const AuthLoginArea: React.FC = () => {
  const [isCheck, setIsCheck] = useState(Boolean);
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [errMsg, setErrMsg] = useState(String);
  const { user, userType } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const LoginSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      setErrMsg('이메일을 입력해주세요')
      return;
    } else if (!password) {
      setErrMsg('비밀번호를 입력해주세요')
      return;
    }
    setErrMsg('');

    if (isCheck) {
      localStorage.setItem('email', email);
    }

    dispatch({
      type: LOG_IN_REQUEST,
      payload: {
        email: email,
        password: password,
      },
    });
  }

  useEffect(() => {
    var LS = localStorage.getItem('email');
    if (LS) {
      setEmail(LS)
    }
  }, []);

  if (user) {
    return <Redirect to="/home" />
  }

  return (
    <S.Postioner>
      <S.InputArea>
        <S.InputWrapper>
          <S.Title>{userType} 로그인</S.Title>
          <S.InputForm onSubmit={LoginSubmit}>
            <S.Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
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
            <S.ErrMsg>{errMsg}</S.ErrMsg>
          </S.InputForm>
          <S.Desc>
            이메일 혹은 비밀번호를 잊으셨나요?
              <Link to="#">이메일/비밀번호 찾기</Link>
          </S.Desc>
          <S.Desc>
            아직 계정이 없나요?
              <Link to="#">계정 생성하기</Link>
          </S.Desc>
        </S.InputWrapper>
      </S.InputArea>
    </S.Postioner>
  )
}

export default AuthLoginArea;
