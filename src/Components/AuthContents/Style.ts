import styled from 'styled-components';

interface StyleProps {
    backgrounColor?: String
    textColor?: String
}

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const TextArea = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
`

export const TextWrapper = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: bold;
    color: #222222;
    line-height: 60px;
`

export const SubTitle = styled.span`
    margin-top: 10px;
    font-size: 18px;
    font-weight: lighter;
    color: #222222;
    white-space: normal;
`

export const ButtonArea = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonWrapper = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    color: #222222;
    flex-direction: column;
`

export const Lable = styled.h2`
    font-size: 24px;
    font-weight: bold;
`

export const Buttons = styled.div`
    display: flex;

    a {
        text-decoration: none;
        flex: 1;
    }
`

export const Button = styled.div<StyleProps>`
    background-color: ${(props) => `${props.backgrounColor}`};
    flex: 1;
    margin: 16px 15px 16px 0px;
    padding: 10px 18px;
    border-radius: 10px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`

export const ButtonDesc = styled.span<StyleProps>`
    color: ${(props) => `${props.textColor}`};
    font-size: 22px;
    font-weight: bold;
    line-height: 35px;
    text-decoration: none;
`
