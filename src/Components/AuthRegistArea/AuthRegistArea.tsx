import React, { useState } from 'react';
// Asset & Style
import { ReactComponent as ICN_CHECK } from 'Assets/Svg/check.svg';
// Router
import { Link } from 'react-router-dom';
// Global State Management
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST, RESET_AUTH_PROCESS } from 'Actions/User.action';
import { RootState } from 'Reducers';
import { historyType } from 'Utils/Types';
import * as S from './Style';

type RegistProps = {
  history: historyType
}

const AuthRegistArea: React.FC<RegistProps> = ({ history }) => {
  const [isCheck, setIsCheck] = useState(Boolean);
  const [email, setEmail] = useState(String);
  const [crrPassword, setCrrPassword] = useState(String);
  const [rePassword, setRePassword] = useState(String);
  const [code, setCode] = useState(String);
  const [ErrMsg, setErrMsg] = useState(String);
  const dispatch = useDispatch();
  const { singUpProcess, userType } = useSelector((state: RootState) => state.auth);

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

  if (singUpProcess === 'success') {
    alert('회원가입이 성공적으로 완료되었습니다.');
    history.go(-1);
    dispatch({ type: RESET_AUTH_PROCESS });
  }

  return (
    <S.Postioner>
      <S.InputArea>
        <S.InputWrapper>
          <S.Title>{userType} 계정 생성</S.Title>
          <S.ErrMsg>{ErrMsg}</S.ErrMsg>
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
      </S.InputArea>
    </S.Postioner>
  )
}

export default AuthRegistArea;
