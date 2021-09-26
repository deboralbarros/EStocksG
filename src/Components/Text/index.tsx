import { ReactElement } from 'react';
import { Text as StyledText } from './styles'

interface TextProps {
    fontSize: number;
    children: ReactElement | string;
    fontWeight: number;
}

const Text = ({ fontSize, fontWeight, children }: TextProps): ReactElement => {
    return (
        <StyledText fontSize={fontSize} fontWeight={fontWeight}>{children}</StyledText>
    )
};

export default Text;
