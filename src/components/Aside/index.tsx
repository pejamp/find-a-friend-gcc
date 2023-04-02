import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import chevron from '../../assets/icons/chevron-bottom.svg';

import { SearchButton } from '../SearchButton'
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '@/context/locationContext';
import { useNavigate } from 'react-router-dom';
import { PetsContext } from '@/context/petsContext';

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
  SelectWrapper,
  HeaderSelect
} from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

type AsideProps = {
  location: {
    state: string;
    city: string;
  };
}

interface SearchFilter {
  type: string;
  value: string;
}

export function Aside(props: AsideProps) {
  const apiURL = "http://localhost:3333";
  const [filters, setFilters] = useState<SearchFilter[]>([]);
  const { states, cities, setCities, setSelectedState, selectedCity, setSelectedCity } = useContext(LocationContext);
  const { setPets, setFilteredPets, setFiltered } = useContext(PetsContext);

  async function handleSearchPets() {
    const response = await fetch(`${apiURL}/pets/${selectedCity}`);
    const data = await response.json();
    setPets(data.pets);
    setFiltered(false);
  }

  function handleChangeSearchFilters(event: any) {
    const filterType = event.target.name;
    const filterValue = event.target.value;

    const existingFilterIndex = filters.findIndex((filter) => filter.type === filterType);

    if (existingFilterIndex !== -1) {
      setFilters(prevFilters => {
        const newFilters = [...prevFilters];
        newFilters[existingFilterIndex] = { type: filterType, value: filterValue };
        return newFilters;
      })
    } else {
      setFilters(prevFilters => [...prevFilters, {type: filterType, value: filterValue}])
    }
  }

  async function getFilteredPets(url: string) {
    const response = await fetch(`${url}`);
    const data = await response.json();
    setFilteredPets(data.pets);
    setFiltered(true);
  }

  function getFilterUrl(filters: SearchFilter[]): string {
    const filterParams = filters.map((filter) => `${filter.type}=${filter.value}`).join('&');
    return `${apiURL}/pets/${selectedCity}?${filterParams}`;
  }

  async function handleChangeState(event: any) {
    setSelectedState(event.target.value);
    const response = await fetch(`${apiURL}/location/citys/${event.target.value}`);
    const data = await response.json();
    setCities(data.citys);
  }

  function handleChangeCity(event: any) {
    setSelectedCity(event.target.value);
  }

  useEffect(() => {
    getFilteredPets(getFilterUrl(filters));
  }, [filters]);

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <SelectWrapper>
              <HeaderSelect
                name="uf"
                id="uf"
                defaultValue={props.location.state}
                onChange={handleChangeState}
              >
                {states.map((state) => (
                  <option key={state.id} value={state.sigla}>
                    {state.sigla}
                  </option>
                ))}
              </HeaderSelect>
              <img src={chevron} alt="" />
            </SelectWrapper>
            <SelectWrapper>
              <HeaderSelect
                name="city"
                id="city"
                defaultValue={props.location.city}
                onChange={handleChangeCity}
              >
                {cities.map((city) => (
                  <option key={city.code} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </HeaderSelect>
              <img src={chevron} alt="" />
            </SelectWrapper>
            <SearchButton onClick={handleSearchPets} />
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independencyOptions}
            onChange={handleChangeSearchFilters}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  );
}
