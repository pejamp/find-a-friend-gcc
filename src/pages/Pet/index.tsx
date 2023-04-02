import { Link } from "react-router-dom";
import { Aside, BackButton, Container, Content, Logo, PetInfo } from "./styles";
import LogoIcon from '../../assets/icons/logo.svg';
import ArrowIcon from '../../assets/icons/arrow.svg';
import { Gallery } from "@/components/Gallery";

export function Pet() {
  const images = [
    { id: 'option1', value: "https://source.unsplash.com/random/?computer" },
    { id: 'option2', value: "https://source.unsplash.com/random/?cat" },
    { id: 'option3', value: "https://source.unsplash.com/random/?dog" },
    { id: 'option4', value: "https://source.unsplash.com/random/?phone" },
  ];

  return (
    <Container>
      <Aside>
        <Link to={'/'}>
          <Logo src={LogoIcon} alt="" />
        </Link>
        <Link to={'/map'}>
          <BackButton>
            <img src={ArrowIcon} alt="" />
          </BackButton>
        </Link>
      </Aside>
      <Content>
        <p>Seu novo amigo</p>
        <PetInfo>
          <Gallery images={images} />
        </PetInfo>
      </Content>
    </Container>
  );
}