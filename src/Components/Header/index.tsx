import { ReactElement } from 'react';
import { Container, Title, ButtonsContainer } from './styles';
import Button from '../Button';

const Header = (): ReactElement => {
    return (
        <Container>
            <Title>Nome da aplicação</Title>

            <ButtonsContainer>
                <Button label="Ranking" onClick={() => {}} color="secondary" />
                <Button label="Ranking" onClick={() => {}} color="secondary" />
                <Button label="Ranking" onClick={() => {}} color="secondary" />
                <Button label="Ranking" onClick={() => {}} color="secondary" />
                <Button label="" onClick={() => {}} color="primary" />
            </ButtonsContainer>
        </Container>
    )
};

export default Header;
