import logo from '../../assets/icons/logo.svg';
import chevron from '../../assets/icons/chevron-bottom.svg';
import bannerPets from '../../assets/images/pets.png';
import { SearchButton } from '@/components/SearchButton';
import { useNavigate } from 'react-router-dom';

import {
  Banner,
  Container,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
  LeftSide,
  Logo,
  RightSide,
  SearchContainer,
  Text,
  Title,
} from "./styles";
import { useContext, useState } from 'react';
import { LocationContext } from '@/context/locationContext';
import { PetsContext } from '@/context/petsContext';

export function Home() {
  const apiURL = "http://localhost:3333";
  const navigate = useNavigate();
  const { states, cities, setCities, setSelectedCity, setSelectedState, selectedState, selectedCity } = useContext(LocationContext);

  function handleSearchPets() {
    navigate('/map', { state: { state: selectedState, city: selectedCity } });
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

  return (
    <Container>
      <LeftSide>
        <Logo>
          <img src={logo} alt="" />
          <span>FindAFriend</span>
        </Logo>
        <Title>Leve a felicidade para o seu lar</Title>
        <Text>Encontre o animal de estimação ideal para seu estilo de vida!</Text>
      </LeftSide>
      <RightSide>
        <Banner>
          <img src={bannerPets} alt="" />
        </Banner>
        <SearchContainer>
          <p>Busque um amigo:</p>
          <FilterWrapper>
            <FilterInput name="uf" id="uf" scale={'small'} onChange={handleChangeState}>
              <FilterInputOption value="all">UF</FilterInputOption>
              {states.map((state) => (<FilterInputOption key={state.id} value={state.sigla}>{state.sigla}</FilterInputOption>))}
            </FilterInput>
            <img src={chevron} alt="" />
          </FilterWrapper>
          <FilterWrapper>
            <FilterInput name="city" id="city" scale={'large'} onChange={handleChangeCity}>
              <FilterInputOption value="all">Cidade</FilterInputOption>
              {cities.map((city) => (<FilterInputOption key={city.code} value={city.name}>{city.name}</FilterInputOption>))}
            </FilterInput>
            <img src={chevron} alt="" />
          </FilterWrapper>
          <SearchButton onClick={handleSearchPets} />
        </SearchContainer>
      </RightSide>
    </Container>
  )
}
