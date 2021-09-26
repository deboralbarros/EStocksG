import styled from 'styled-components';

interface ButtonProps {
    color: 'primary' | 'secondary';
}

interface SecondaryButtonProps {
    activated: boolean;
}

export const Container = styled.div`
    background: #00C2FF;
    width: 111px;
    height: 41px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-right: 190px;
`;

export const ContainerSecondary = styled.div`
    background: #1C1C25;
    width: 53px;
    height: 41px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    color: #12131A;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const FilterOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const FilterOptionButton = styled.button<ButtonProps>`
    opacity: ${({ color }) => color === 'primary' ? 1 : 0.28};
    background: #00C2FF;
    width: 130px;
    height: 41px;
    border-radius: 8px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    border: none;    
    cursor: pointer;
`;

export const SecondaryOptions = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const SecondaryButton = styled.button<SecondaryButtonProps>`
    opacity: ${({ activated }) => activated ? 1 : 0.54};
    background: ${({ activated }) => activated ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.9)'};
    border-width: ${({ activated }) => activated ? 1 : 0}px;
    border-color: ${({ activated }) => activated && '#00C2FF'};
    color: #fff;
    font-size: 10px;
    background-blend-mode: multiply;
    border-radius: 8px;
    width: 127px;
    height: 41px;
    margin: 0 13px;
    text-align: center;
    cursor: pointer;
`;
