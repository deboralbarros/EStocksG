import { ReactElement, useState } from 'react';
import { Container } from './styles';
import Company from '../Company';
import Button from '../Button';
import Filter, { SecondaryButtonType } from '../Filter';

export interface CompanyDataProps {
    companyName: string;
    metric: number | string;
    color: string;
}

const CompanyList = (): ReactElement => {
    const [showMore, setShowMore] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<'e' | 's' | 'g' | undefined>(undefined);
    const [selectedSecondaryFilter, setSelectedSecondaryFilter] = useState<SecondaryButtonType>(undefined);

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
            {showMore && <Filter 
                setSelectedSecondaryFilter={setSelectedSecondaryFilter} 
                selectedFilter={selectedFilter} 
                selectedSecondaryFilter={selectedSecondaryFilter}
                setSelectedFilter={setSelectedFilter}
            />}
            {companies.map((data) => 
                <Company data={data} filter={selectedSecondaryFilter} />
            )}
            {!showMore && <Button onClick={() => setShowMore(true)} label="Ver todos" color="primary" />}
        </Container>
    )
}

export default CompanyList;
