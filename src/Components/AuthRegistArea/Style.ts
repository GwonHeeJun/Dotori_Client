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
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InputForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 7%;
    align-items: center;
`

export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const EmailWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
    font-size: 1.1rem;
    font-weight: lighter;
    margin-left: 2.6%;

    a {
        color: #217ECE;
        text-decoration: none;
        margin-right: 5px;
    }
`

export const ErrMsg = styled.span`
    margin-top: 2.5%;
    color: #fa5252;
`


export const LoginButton = styled.button`
    background-color: #0F4C81;
    margin-top: 7%;
    width: 80%;
    height: 60px;
    border-radius: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
`

export const LoginText = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
`

export const Input = styled.input`
    background-color: #f4f4f4;
    border: 1px solid #F4F4F4;
    border-radius: 10px;
    margin-bottom: 4.6%;
    padding: 5.05% 4.4%;
    width: 90%;
    font-weight: normal;
    outline: none;
    font-size: 1.1rem;
    color: #444444;

    &::placeholder {
        color: #444444;
        font-size: 1.25rem;
        font-weight: bold;
    }
`

export const Title = styled.h2`
    font-size: 2.75rem;
    font-weight: bold;
    color: #222222;
    line-height: 3.75rem;
`
