import React from 'react';
// Router
import { Link, Redirect } from 'react-router-dom';
// Assets & Style
import { ReactComponent as ICN_USER } from 'Assets/Svg/user.svg';
import { ReactComponent as ICN_SETTING } from 'Assets/Svg/setting.svg';
// Global State Mangement
import { RootState } from 'Reducers';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_USER_TYPE } from 'Actions/User.action';
import * as S from './Style';

const AuthContents: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  if (user) {
    return <Redirect to="/home" />
  }

  return (
    <S.Postioner>
      <S.TextArea>
        <S.TextWrapper>
          <S.Title>
            교내 편의 시스템,
            DOTORI
          </S.Title>
          <S.SubTitle>
            동아리 '빈실'에서 주도하여 개발된 교내 편의 시스템,
            DOTORI 입니다.
          </S.SubTitle>
        </S.TextWrapper>
      </S.TextArea>
      <S.ButtonArea>
        <S.ButtonWrapper>
          <S.Lable>시작해 볼까요?</S.Lable>
          <S.Buttons>
            <Link to="/login" onClick={() => dispatch({ type: CHANGE_USER_TYPE, payload: '학생' })}>
              <S.Button backgrounColor="#0F4C81">
                <ICN_USER />
                <S.ButtonDesc textColor="#fff">학생으로 시작</S.ButtonDesc>
              </S.Button>
            </Link>
            <Link to="/login" onClick={() => dispatch({ type: CHANGE_USER_TYPE, payload: '사감' })}>
              <S.Button backgrounColor="#E8E8EC">
                <ICN_SETTING />
                <S.ButtonDesc textColor="#222222">사감으로 시작</S.ButtonDesc>
              </S.Button>
            </Link>
          </S.Buttons>
        </S.ButtonWrapper>
      </S.ButtonArea>
    </S.Postioner>
  )
}

export default AuthContents;
