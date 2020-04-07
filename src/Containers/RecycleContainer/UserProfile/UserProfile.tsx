import React from 'react';
import * as S from './Style';

import { ReactComponent as Out } from 'Assets/Svg/out.svg';
import { ReactComponent as Limit } from 'Assets/Svg/limit.svg';

const UserProfile: React.FC = () => {
  return (
    <S.Postioner>
      <S.Header>
        <S.LogoutWrapper>
          <Out />
          <S.LogoutText>로그아웃</S.LogoutText>
        </S.LogoutWrapper>
      </S.Header>
      <S.Contents>
        <S.UserWrapper>
          <S.UserProfileWrapper>
            <S.ProfileImage />
            <S.ProfileName>권희준</S.ProfileName>
            <S.ProfileGrade>2-3</S.ProfileGrade>
          </S.UserProfileWrapper>
          <S.PointWrapper>
            <Limit />
            <S.PointLabel>상벌점</S.PointLabel>
            <S.PointBar>
              <S.PointActive />
            </S.PointBar>
            <S.PointValue>-5</S.PointValue>
          </S.PointWrapper>
        </S.UserWrapper>
        <S.EventWrapper>
          <S.EventLabel>이벤트</S.EventLabel>
        </S.EventWrapper>
        <S.Advertise />
      </S.Contents>
      <S.Footer>
        <S.CopyRight>© 2019 GSM. All Rights Reserved.</S.CopyRight>
        <S.Policy>
          <strong>개인정보취급방침</strong>
          |<strong>이용약관</strong>
          |<strong>라이선스</strong>
          |<strong>Github</strong>
        </S.Policy>
      </S.Footer>
    </S.Postioner>
  )
}

export default UserProfile;
