import React from 'react';
import ICN_FULLSCREEN from 'Assets/full_screen.png';
import * as S from './Style';

const ReactiveContainer: React.FC = () => {
 

  return (
    <S.Postioner>
      <S.Icon src={ICN_FULLSCREEN} />
      <S.Top>웹에서 지원하지 않는 브라우저 크기입니다.</S.Top>
      <S.SubTitle>가로를 1550 이상, 세로를 950 이상 늘려주세요</S.SubTitle>
      <S.Desc>사실 아직 반응형 뷰를 개바...ㄹ 아니 지원을 안해요 <span role="img" aria-label="awkward">😅</span></S.Desc>
      <S.Desc>빠른 시일내에 지원 하도록 노력하겠습니다 <span role="img" aria-label="peace">🤟</span></S.Desc>
    </S.Postioner>
  )
}

export default ReactiveContainer;
