import styled from 'styled-components';

interface ButtonContainerProps {
    color: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 170px;
    height: 40px;
    background-color: ${({ color }) => color === 'primary' ? '#68F4A9' : 'transparent'};
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
`
