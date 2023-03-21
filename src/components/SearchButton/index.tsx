import search from '../../assets/icons/search.svg';
import { Container } from './styles';

export function SearchButton() {
  return (
    <Container>
      <img src={search} alt="ícone de lupa" />
    </Container>
  );
}