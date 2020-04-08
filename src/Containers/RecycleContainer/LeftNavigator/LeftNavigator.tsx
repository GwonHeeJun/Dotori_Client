import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Home } from 'Assets/Svg/home.svg';
import { ReactComponent as Laptop } from 'Assets/Svg/laptop.svg';
import { ReactComponent as Notice } from 'Assets/Svg/notice.svg';
import { ReactComponent as Point } from 'Assets/Svg/point.svg';
import { ReactComponent as Song } from 'Assets/Svg/song.svg';
import { ReactComponent as Setting } from 'Assets/Svg/setting.svg';
import { ReactComponent as School } from 'Assets/Svg/school.svg';
import { ReactComponent as Slack } from 'Assets/Svg/slack.svg';
import { ReactComponent as Bug } from 'Assets/Svg/bug.svg';
import * as S from './Style';

const menuList = [
    { router: 'home', title: '홈', active: true },
    { router: 'notice', title: '공지사항', active: false },
    { router: 'laptop', title: '노트북 대여', active: false },
    { router: 'song', title: '기상음악', active: false },
    { router: 'point', title: '상벌점', active: false },
    { router: 'setting', title: '설정', active: false },
]

const subMenuList = [
    { router: 'school', title: '학교 홈페이지', active: true },
    { router: 'slack', title: '학교 슬랙', active: false },
    { router: 'bug', title: '버그 제보', active: false },
]

const returnSvgIcons = (router: String) => {
    switch (router) {
        case 'home': return <Home />
        case 'notice': return <Notice />
        case 'laptop': return <Laptop />
        case 'song': return <Song />
        case 'point': return <Point />
        case 'setting': return <Setting />
        case 'school': return <School />
        case 'slack': return <Slack />
        case 'bug': return <Bug />
        default: return false;
    }
}

const onChangeMenuActiveType = (index: Number) => menuList.map((item, ix) => ix === index ? menuList[ix].active = true : menuList[ix].active = false)

const LeftNavigator: React.FC = () => {
    return (
        <S.Postioner>
            <h2>로고</h2>
            <S.MenuDivision>
                {menuList.map((item, ix) =>
                    <Link to={`/${item.router}`} onClick={() => onChangeMenuActiveType(ix)} key={ix}>
                        <S.MenuLabel isActive={item.active}>
                            {returnSvgIcons(item.router)}
                            <S.MenuText>{item.title}</S.MenuText>
                        </S.MenuLabel>
                    </Link>)}
            </S.MenuDivision>
            <S.WrapDivision>
                {subMenuList.map((item, ix) =>
                    <S.SubMenuLabel isActive={item.active} key={ix}>
                        {returnSvgIcons(item.router)}
                        <S.SubMenuText>{item.title}</S.SubMenuText>
                    </S.SubMenuLabel>)}
            </S.WrapDivision>
        </S.Postioner>
    )
}

export default LeftNavigator;
