import logo from '../../assets/icons/logo.svg';
import chevron from '../../assets/icons/chevron-bottom.svg';
import bannerPets from '../../assets/images/pets.png';
import { SearchButton } from '@/components/SearchButton';

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

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
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
            <FilterInput name="uf" id="uf" scale={'small'}>
              <FilterInputOption value="all">PE</FilterInputOption>
            </FilterInput>
            <img src={chevron} alt="" />
          </FilterWrapper>
          <FilterWrapper>
            <FilterInput name="city" id="city" scale={'large'}>
              <FilterInputOption value="all">Recife</FilterInputOption>
              <FilterInputOption value="all">São Paulo</FilterInputOption>
              <FilterInputOption value="all">São Paulooooooooooooooooooooooo</FilterInputOption>
            </FilterInput>
            <img src={chevron} alt="" />
          </FilterWrapper>
          <SearchButton />
        </SearchContainer>
      </RightSide>
    </Container>
  )
}
