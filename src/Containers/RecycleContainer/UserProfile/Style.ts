import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

export const LogoutWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        fill: #8B8B8B;
        width: 21px;
        height: 22px;
    }
`

export const LogoutText = styled.span`
    font-size: 1.125rem;
    text-align: center;
    color: #8B8B8B;
    margin-left: 8%;
    line-height: 1.7rem;
`

export const Contents = styled.div`
    flex: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const UserWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const UserProfileWrapper = styled.div`
    flex: 5;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProfileImage = styled.img`
    width: 100%;
    max-width: 144px;
    height: 100%;
    max-height: 144px;
    background-color: #8B8B8B;
    border-radius: 50%;
`

export const ProfileName = styled.span`
    margin-top: 3.5%;
    color: #222222;
    font-size: 1.25rem;
    font-weight: bold;
`

export const ProfileGrade = styled.span`
    margin-top: 0.5%;
    color: #BBBBBE;
    font-size: 1.125rem;
    font-weight: bold;
`

export const PointWrapper = styled.div`
    flex: 1;
    padding: 0px 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
        fill: #444444;
    }
    @media all and (max-width:1805px) {
        svg {
            display: none;
        }
    }
`

export const PointLabel = styled.span`
    font-size: 1rem;
    font-weight: bold;
    margin: 0px 8%;
`

export const PointBar = styled.div`
    width: 100%;
    max-width: 147px;
    height: 5px;
    background-color: #EDEDED;
    border-radius: 50px;
    position: relative;
`

export const PointActive = styled.div`
    position: absolute;
    width: 10%;
    height: 5px;
    background-color: #FE5B5B;
    border-radius: 50px;
`

export const PointValue = styled.span`
    margin-left: 5%;
    color: #FE5B5B;
    font-weight: bold;
`

export const EventWrapper = styled.div`
    width: 80%;
    flex: 0.8;
    padding: 0px 10%;
`

export const EventLabel = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;

`

export const Advertise = styled.div`
    max-width: 75%;
    max-height: 28.5%;
    width: 100%;
    height: 100%;
    border: 1px solid black;
`

export const Footer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CopyRight = styled.span`
    font-size: 0.75rem;
    font-weight: 300;
`
export const Policy = styled.span`
    font-size: 0.75rem;
    font-weight: 300;

    strong {
        color: #217ECE;
        font-weight: 300;
        margin-right: 4px;
        margin-left: 4px;
        cursor: pointer;
    }
`
