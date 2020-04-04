import React from 'react';
import * as S from './Style';
import ICN_FULLSCREEN from 'Assets/full_screen.png';

const ReactiveContainer : React.FC = () => {
    return (
        <S.Postioner>
            <S.Icon src={ICN_FULLSCREEN} />
            <S.Top>화면 가로를 지원하지 않는 크기입니다. 1550 이상 늘려주세요!</S.Top>
            <S.Desc>사실 아직 반응형 뷰를 개바...ㄹ 아니 지원을 안해요 <span role="img" aria-label="awkward">😅</span></S.Desc>
            <S.Desc>빠른 시일내에 지원 하도록 노력하겠습니다 <span role="img" aria-label="peace">🤟</span></S.Desc>
        </S.Postioner>
    )
}

export default ReactiveContainer;