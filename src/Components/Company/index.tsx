import { ReactElement, useState } from 'react';
import { CompanyDataProps } from '../CompanyList';
import { Line } from 'react-chartjs-2';
import Text from '../Text';
import { Container, Color, Button, Right, ChartContainer, Header } from './styles';
import PlusIcon from '../../Assets/Plus.svg';
import LessIcon from '../../Assets/Less.svg';
import Chart from 'chart.js';
import ButtonComponent from '../Button';

interface CompanyProps {
    data: CompanyDataProps;
    filter: string | undefined;
}

const Company = ({ data, filter }: CompanyProps): ReactElement => {
    const [showChart, setShowChart] = useState(false);

    const dataChart: Chart.ChartData = {
        labels: ["A", "B", "C", "D", "E", "F"],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                pointBorderColor: "#00FFE0",
                borderColor: "#00FFE0",
                label: "",
                weight: 2
            }
        ]
    }

    return (
        <>
            <Container extended={showChart}>
                <Header>
                    <Text fontSize={24} fontWeight={600}>{data.companyName}</Text>
                    <Right>
                        <Text fontSize={24} fontWeight={600}>{data.metric}</Text>
                        <Button onClick={() => setShowChart(!showChart)}>
                            <img src={showChart ? LessIcon : PlusIcon} alt="" />
                        </Button>
                    </Right>
                </Header>
                {showChart && (
                    <ChartContainer>
                        {filter && <Text fontSize={24} fontWeight={400}>{filter}</Text>}
                        <Line data={dataChart}/> 
                        <ButtonComponent onClick={() => {}} label="Investimento" color="primary" />  
                    </ChartContainer>
                )}
            </Container>
            <Color color={data.color} />
        </>
    )
};

export default Company;
