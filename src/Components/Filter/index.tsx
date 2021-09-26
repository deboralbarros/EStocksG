import { ReactElement, useState } from 'react';
import { Container, Button, FilterOptions, FilterOptionButton, SecondaryOptions, SecondaryButton, ContainerSecondary } from './styles';
import FilterIcon from '../../Assets/Filter.svg';
import SecondaryFilterIcon from '../../Assets/SecondaryFilter.svg';
import Text from '../Text';

type SecondaryButtonType = 
    'Poluição do ar e da água' 
    | 'Biodiversidade' 
    | 'Aquecimento global e emissão de CO2' 
    | 'Eficiência Energética'
    | 'Desmatamento'
    | 'Gestão de Resíduo'
    | 'Escassez de água'
    | undefined;

const Filter = (): ReactElement => {
    const [active, setActive] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<'e' | 's' | 'g' | undefined>(undefined);
    const [selectedSecondaryFilter, setSelectedSecondaryFilter] = useState<SecondaryButtonType>(undefined);

    return (
        <>
            {selectedFilter && <Text fontSize={40} fontWeight={600}>{selectedFilter === 'e' ? 'Environmental' : selectedFilter === 'g' ? 'Governance' : 'Social'}</Text>}

            {selectedSecondaryFilter && <Text fontSize={24} fontWeight={400}>{selectedSecondaryFilter}</Text>}
            
            {!active && (
                <Container color="primary">
                    <Button onClick={() => setActive(true)}>
                        <img style={{ marginRight: 10 }} src={FilterIcon} alt="" />
                        Filtros
                    </Button>
                </Container>
            )}
            {active && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '70%'
                }}>
                    <FilterOptions>
                        <FilterOptionButton 
                            color={selectedFilter === 'e' ? "primary" : "secondary"} 
                            onClick={() => {
                                setSelectedFilter('e')
                                setSelectedSecondaryFilter(undefined)
                            }}
                        >
                            E
                        </FilterOptionButton>
                        <FilterOptionButton 
                            color={selectedFilter === 's' ? "primary" : "secondary"} 
                            onClick={() => {
                                setSelectedFilter('s')
                                setSelectedSecondaryFilter(undefined)
                            }}
                        >
                            S
                        </FilterOptionButton>
                        <FilterOptionButton 
                            color={selectedFilter === 'g' ? "primary" : "secondary"} 
                            onClick={() => {
                                setSelectedFilter('g')
                                setSelectedSecondaryFilter(undefined)
                            }}
                        >
                            G
                        </FilterOptionButton>
                    </FilterOptions>

                    <ContainerSecondary>
                        <Button onClick={() => {
                            setActive(false);
                            setSelectedFilter(undefined);
                            setSelectedSecondaryFilter(undefined);
                        }}>
                            <img src={SecondaryFilterIcon} alt="" />
                        </Button>
                    </ContainerSecondary>
                </div>
            )}

            {selectedFilter === 'e' && 
                <SecondaryOptions>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Poluição do ar e da água'}
                        onClick={() => setSelectedSecondaryFilter('Poluição do ar e da água')}
                    >
                        Poluição do ar e da água
                    </SecondaryButton>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Biodiversidade'}
                        onClick={() => setSelectedSecondaryFilter('Biodiversidade')}
                    >
                        Biodiversidade
                    </SecondaryButton>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Aquecimento global e emissão de CO2'}
                        onClick={() => setSelectedSecondaryFilter('Aquecimento global e emissão de CO2')}
                    >
                        Aquecimento global e emissão de CO2
                    </SecondaryButton>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Eficiência Energética'}
                        onClick={() => setSelectedSecondaryFilter('Eficiência Energética')}
                    >
                        Eficiência Energética
                    </SecondaryButton>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Desmatamento'}
                        onClick={() => setSelectedSecondaryFilter('Desmatamento')}
                    >
                        Desmatamento
                    </SecondaryButton>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Gestão de Resíduo'}
                        onClick={() => setSelectedSecondaryFilter('Gestão de Resíduo')}
                    >
                        Gestão de Resíduo
                    </SecondaryButton>
                    <SecondaryButton 
                        activated={selectedSecondaryFilter === 'Escassez de água'}
                        onClick={() => setSelectedSecondaryFilter('Escassez de água')}
                    >
                        Escassez de água
                    </SecondaryButton>
                </SecondaryOptions>
            }
        </>
    )
};

export default Filter;
