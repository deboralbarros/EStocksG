import { ReactElement } from 'react';
import { ButtonContainer } from './styles'

interface ButtonProps {
    color: 'primary' | 'secondary';
    label: string;
    onClick: () => void;
}

const Button = ({ label, onClick, color }: ButtonProps): ReactElement => {
    return (
        <ButtonContainer onClick={onClick} color={color}>
            {label}
        </ButtonContainer>
    )
};

export default Button
