import styled from 'styled-components';

interface StyleProps {
    isActive: Boolean
}

export const Postioner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20% 0% 20% 18%;
    height: 92%;

    h2 {
        margin: 0px;
    }
`

export const MenuDivision = styled.div`
    flex: 3;
    margin-top: 99px;

    a {
        text-decoration: none;
    }
`

export const MenuLabel = styled.div<StyleProps>`
    display: flex;
    height: 5%;
    align-items: center;
    margin-bottom: 34px;
    color: ${(props) => props.isActive ? '#0f4c81' : '#bbbbbe'};

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${(props) => props.isActive ? '#0f4c81' : '#bbbbbe'};
    }
`

export const MenuText = styled.span`
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 21px;
`

export const WrapDivision = styled.div`
    flex: 1;

    a {
        text-decoration: none;
    }
`

export const SubMenuLabel = styled.div<StyleProps>`
    display: flex;
    height: 15%;
    align-items: center;
    margin-top: 32px;
    color: #bbbbbe;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: #bbbbbe;
    }
`

export const SubMenuText = styled.span`
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 21px;
`
