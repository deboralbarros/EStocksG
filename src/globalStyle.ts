import styled, { createGlobalStyle, css } from 'styled-components';
import Background from './Assets/image.png';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Georama:wght@400;500&display=swap');

    body {
        margin: 0;
        padding: 0;
        box-shadow: border-box;
        height: 100%;
        font-family: 'Georama', sans-serif;
        ${css`
            background: url(${Background}) #12131A center top;
        `}
    }
    
    * {
        font-family: 'Georama', sans-serif;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;

