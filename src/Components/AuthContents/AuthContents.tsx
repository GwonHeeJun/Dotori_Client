import React from 'react';
import { ReactComponent as ICN_USER } from 'Assets/Svg/user.svg';
import { ReactComponent as ICN_SETTING } from 'Assets/Svg/setting.svg';
import * as S from './Style';

const AuthContents: React.FC = () => {
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
              <S.Button backgrounColor="#0F4C81">
                <ICN_USER />
                <S.ButtonDesc textColor="#fff">학생으로 시작</S.ButtonDesc>
              </S.Button>
              <S.Button backgrounColor="#E8E8EC">
                <ICN_SETTING />
                <S.ButtonDesc textColor="#222222">사감으로 시작</S.ButtonDesc>
              </S.Button>
            </S.Buttons>
          </S.ButtonWrapper>
        </S.ButtonArea>
      </S.Postioner>
    )
}

export default AuthContents;
