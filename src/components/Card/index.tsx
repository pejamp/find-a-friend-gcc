import logo from '@/assets/icons/logo.svg'

import { Container, Name, PetImage, TypeIcon } from './styles'
import { useNavigate } from 'react-router-dom';

type CardProps = {
  id: string;
  path: string;
  name: string;
  type: 'dog' | 'cat' | string;
}

export function Card({ id, path, name, type }: CardProps) {
  const navigate = useNavigate();

  function handleClickRedirectToPetPage() {
    navigate("/pet", { state: { petId: id } });
  }

  return (
    <Container onClick={handleClickRedirectToPetPage}>
      <PetImage>
        <img src={path} alt={`Foto de ${name}`} />
      </PetImage>
      <div>
        <TypeIcon>
          <div
            style={{ backgroundColor: type === 'cat' ? '#F4D35E' : '#F15156' }}
          >
            <img src={logo} alt="" />
          </div>
        </TypeIcon>
        <Name>{name}</Name>
      </div>
    </Container>
  )
}
