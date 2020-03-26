import React, { useState } from 'react';
// Asset & Style
import * as S from './Style';
import { ReactComponent as ICN_CHECK } from 'Assets/Svg/check.svg';
// Router
import { Link, Redirect } from 'react-router-dom';
// Global State Management
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from 'Actions/User.action';
import { RootState } from 'Reducers';

const AuthRegistArea: React.FC = () => {
  const [isCheck, setIsCheck] = useState(Boolean);
  const [email, setEmail] = useState(String);
  const [crrPassword, setCrrPassword] = useState(String);
  const [rePassword, setRePassword] = useState(String);
  const [code, setCode] = useState(String);
  const [ErrMsg, setErrMsg] = useState(String);
  const dispatch = useDispatch();
  const { isSignedUp } = useSelector((state: RootState) => state.auth);

  const RegistSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      setErrMsg('이메일을 입력해주세요')
      return;
    } if (!crrPassword || !rePassword) {
      setErrMsg('비밀번호를 입력해주세요')
      return;
    } if (!code) {
      setErrMsg('학생 인증 코드를 입력해주세요')
      return;
    } if (!isCheck) {
      setErrMsg('약관에 동의해주세요')
      return;
    } if (crrPassword !== rePassword) {
      setErrMsg('비밀번호가 같지 않습니다.')
      return;
    }
    setErrMsg('');

    dispatch({
      type: SIGN_UP_REQUEST,
      payload: {
        email,
        crrPassword,
        code,
      },
    });
  }

  if (isSignedUp) {
    alert('회원가입이 성공적으로 완료되었습니다.');
    return <Redirect to="/login" />
  }

  return (
    <S.Postioner>
      <S.InputArea>
        <S.InputWrapper>
          <S.Title>학생 계정 생성</S.Title>
          <S.InputForm onSubmit={RegistSubmit}>
            <S.Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              value={crrPassword}
              onChange={(e) => setCrrPassword(e.target.value)}
            />
            <S.Input
              type="password"
              placeholder="비밀번호 확인"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <S.Input
              type="text"
              placeholder="학생 인증 코드"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
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
              <S.LoginText>회원가입</S.LoginText>
            </S.LoginButton>
          </S.InputForm>
        </S.InputWrapper>
        <S.ErrMsg>{ErrMsg}</S.ErrMsg>
      </S.InputArea>
    </S.Postioner>
  )
}

export default AuthRegistArea;
