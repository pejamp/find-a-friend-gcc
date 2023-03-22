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
import { useEffect, useState } from 'react'

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
  const [pets, setPets] = useState<PetProps[]>([]);

  function handleFilterByPetType() {
    // TO DO
  }

  async function getPetsFromAPI() {
    const response = await fetch(`${apiURL}/pets/São Paulo`);
    const data = await response.json();
    setPets(data.pets);
    console.log(data.pets);
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
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size">
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          {pets.map((pet) => (<Card key={pet.id} path={pet.photo_url} type={pet.type} name={pet.name} />))}
        </Display>
      </Content>
    </Container>
  )
}