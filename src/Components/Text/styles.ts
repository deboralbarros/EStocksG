import styled from 'styled-components';

interface TextProps {
    fontSize: number;
    fontWeight: number;
}

export const Text = styled.p<TextProps>`
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    color: #fff;
    width: 50%;
    text-align: center;
    margin: 16px 0;
`;
