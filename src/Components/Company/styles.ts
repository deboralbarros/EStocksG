import styled from 'styled-components';

interface ContainerProps {
    extended: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 970px;
    height: ${({ extended }) => extended ? 481 : 80}px;
    margin: 16px 0;
    background: #1C1C25;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Color = styled.div`
    background: ${({ color }) => color};
    width: 970px;
    height: 7px;
    margin-top: -22px;
    border-radius: 0 0 8px 8px;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 0 10px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-right: 30px;
    justify-content: flex-end;
`;

export const ChartContainer = styled.div`
    display: flex;
    width: 70%;
`;
