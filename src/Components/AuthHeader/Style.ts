import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
`

export const LogoTitle = styled.h2`
    font-size: 1.5rem;
    cursor: ${(props) => (props.onClick ? 'pointer' : null)};
    font-weight: bold;
    font-family: 'Spoqa Han Sans';
    padding-left: 11.1%;
    color: #222222;
`
