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
    margin-top: 48%;

    a {
        text-decoration: none;
    }
`

export const MenuLabel = styled.div<StyleProps>`
    display: flex;
    height: 5%;
    align-items: center;
    margin-bottom: 16.5%;
    color: ${(props) => props.isActive ? '#0f4c81' : '#bbbbbe'};

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${(props) => props.isActive ? '#0f4c81' : '#bbbbbe'};
    }

    &:hover {
        color: #0f4c81;
        cursor: pointer;

        svg {
            width: 1.5rem;
            height: 1.5rem;
            fill: #0f4c81;
        }
    }
`

export const MenuText = styled.span`
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 10.5%;
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
    margin-top: 15.5%;
    color: #bbbbbe;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: #bbbbbe;
    }

    &:hover {
        color: #0f4c81;
        cursor: pointer;

        svg {
            width: 1.5rem;
            height: 1.5rem;
            fill: #0f4c81;
        }
    }
`

export const SubMenuText = styled.span`
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 10.5%;
`
