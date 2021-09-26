import { ReactElement } from 'react';
import { CompanyDataProps } from '../CompanyList';
import Text from '../Text';
import { Container, Color, Button, Left } from './styles';
import PlusIcon from '../../Assets/Plus.svg';

const Company = ({ companyName, metric, color }: CompanyDataProps): ReactElement => {
    return (
        <>
            <Container>
                <Text fontSize={24} fontWeight={600}>{companyName}</Text>
                <Left>
                    <Text fontSize={24} fontWeight={600}>{metric}</Text>
                    <Button>
                        <img src={PlusIcon} alt="" />
                    </Button>
                </Left>
            </Container>
            <Color color={color} />
        </>
    )
};

export default Company;
