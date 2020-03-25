import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const InputArea = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const InputWrapper = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InputForm = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const EmailWrap = styled.div`
    width: 120px;
    height: 43px;
    display: flex;
    align-items: center;
`

export const Checkbox = styled.div`
    width: 22px;
    height: 22px;
    background-color: #EDEDED;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxText = styled.span`
    text-align: center;
    color: #444444;
    font-size: 18px;
    font-weight: bold;
    margin-left: 11px;
`

export const LoginButton = styled.div`
    background-color: #0F4C81;
    width: 100px;
    height: 43px;
    border-radius: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const LoginText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`

export const Input = styled.input`
    background-color: #f4f4f4;
    border: 1px solid #F4F4F4;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 22px 19px;
    font-weight: normal;
    outline: none;
    font-size: 18px;
    color: #444444;

    &::placeholder {
        color: #444444;
        font-size: 20px;
        font-weight: bold;
    }
`

export const Title = styled.h2`
    font-size: 44px;
    font-weight: bold;
    color: #222222;
    line-height: 60px;
`

export const Desc = styled.span`
    font-size: 16px;
    font-weight: lighter;
    margin-bottom: 8px;

    a {
        color: #217ECE;
        text-decoration: none;
    }
`
