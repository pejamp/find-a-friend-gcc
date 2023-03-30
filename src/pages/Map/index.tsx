import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import dog from '@/assets/images/dog.png'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { PetsContext } from '@/context/petsContext'

type PetProps = {
  id: string;
  name: string;
  type: string;
  photo_url: string;
}

export function Map() {
  const apiURL = "http://localhost:3333";
  const location = useLocation();
  const { state, city } = location.state;
  //const [filteredPets, setFilteredPets] = useState<PetProps[]>([]);
  //const [filtered, setFiltered] = useState(false);
  const { pets, setPets, setFiltered, setFilteredPets, filtered, filteredPets } = useContext(PetsContext);

  function handleFilterByPetType(event: any) {
    const { value } = event.target;

    const filteredPets = pets.filter((pet) => pet.type === value);

    if (value === "all") {
      setFiltered(false);
    } else {
      setFilteredPets(filteredPets);
      setFiltered(true);
    }
  }

  async function getPetsFromAPI() {
    const response = await fetch(`${apiURL}/pets/São Paulo`);
    const data = await response.json();
    setPets(data.pets);
  }

  useEffect(() => {
    getPetsFromAPI();
  }, []);

  return (
    <Container>
      <Aside location={{state, city}} />

      <Content>
        <Header>
          <p>
            Encontre <span>{pets.length} amigo{pets.length > 1 && 's'}</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size" onChange={handleFilterByPetType}>
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          { 
            filtered 
            ?
            filteredPets.map((pet) => (<Card key={pet.id} path={pet.photo_url} type={pet.type} name={pet.name} />))
            :
            pets.map((pet) => (<Card key={pet.id} path={pet.photo_url} type={pet.type} name={pet.name} />))
          }
        </Display>
      </Content>
    </Container>
  )
}