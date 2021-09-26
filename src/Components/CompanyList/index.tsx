import { ReactElement, useState } from 'react';
import { Container } from './styles';
import Company from '../Company';
import Button from '../Button';

export interface CompanyDataProps {
    companyName: string;
    metric: number | string;
    color: string;
}

const CompanyList = (): ReactElement => {
    const [showMore, setShowMore] = useState(false);

    const companies: CompanyDataProps[] = [
        {
            companyName: 'Nome da Empresa',
            metric: 'Métrica',
            color: "#34A42E"
        },
        {
            companyName: 'Nome da Empresa',
            metric: 'Métrica',
            color: "#34A42E"
        },
        {
            companyName: 'Nome da Empresa',
            metric: 'Métrica',
            color: "#34A42E"
        },
        {
            companyName: 'Nome da Empresa',
            metric: 'Métrica',
            color: "#34A42E"
        },
        {
            companyName: 'Nome da Empresa',
            metric: 'Métrica',
            color: "#34A42E"
        },
    ];    

    return (
        <Container>
            {companies.map(({ companyName, metric, color }) => 
                <Company companyName={companyName} metric={metric} color={color} />
            )}
            {!showMore && <Button onClick={() => setShowMore(true)} label="Ver todos" color="primary" />}
        </Container>
    )
}

export default CompanyList;
