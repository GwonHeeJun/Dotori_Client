import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}; /* css 초기화 */
    @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
    @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css');
    body{
        background-color: ${(props) => props.theme.backgroundColor};
        text-decoration: none;
        font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
    }
    html {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;
