import { ButtonHTMLAttributes } from 'react';
import search from '../../assets/icons/search.svg';
import { Container } from './styles';

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SearchButton(props: SearchButtonProps) {
  const { ...rest } = props;

  return (
    <Container {...rest}>
      <img src={search} alt="ícone de lupa" />
    </Container>
  );
}