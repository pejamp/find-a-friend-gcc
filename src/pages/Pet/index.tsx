import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/icons/logo.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
import { Gallery, ImageProps } from "@/components/Gallery";
import { useEffect, useState } from "react";
import {
  Address,
  AddressContainer,
  Aside,
  BackButton,
  Container,
  Content,
  Description,
  Details,
  Divider,
  Logo,
  PetBadge,
  PetInfo,
  PetName,
  RequirementContainer,
  RequirementItem,
  RequirementList,
  Subtitle,
  TelNumber,
  WhatsappLink,
} from "./styles";

export function Pet() {
  const [gallery, setGallery] = useState<ImageProps[]>([]);
  const apiURL = "http://localhost:3333";
  const location = useLocation();
  const { petId } = location.state;

  useEffect(() => {
    Promise.all([
      fetch(`${apiURL}/pets/gallery/${petId}`).then((res) => res.json()),
      fetch(`${apiURL}/pets/show/${petId}`).then((res) => res.json()),
    ])
      .then(([gallery, details]) => {
        setGallery(gallery.pet_gallery);
        console.log(details.pet);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Aside>
        <Link to={"/"}>
          <Logo src={LogoIcon} alt="" />
        </Link>
        <Link to={"/map"}>
          <BackButton>
            <img src={ArrowIcon} alt="" />
          </BackButton>
        </Link>
      </Aside>
      <Content>
        <p>Seu novo amigo</p>
        <PetInfo>
          <Gallery images={gallery} />
          <Details>
            <PetName>Alfredo</PetName>
            <Description>
              Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
              fazer companhia, uma bagunça mas também ama uma soneca.
            </Description>
            <div>
              <div>box de status</div>
              <div>box de status</div>
              <div>box de status</div>
            </div>
            <div>Rotas google maps</div>
            <Divider></Divider>
            <AddressContainer>
              <PetBadge></PetBadge>
              <Address>
                <Subtitle>Seu Cãopanheiro</Subtitle>
                <p>Rua do meio, 123 , Boa viagem, Recife - PE</p>
                <TelNumber>81 1234.4567</TelNumber>
              </Address>
            </AddressContainer>
            <Divider></Divider>
            <RequirementContainer>
              <Subtitle>Requisitos para adoção</Subtitle>
              <RequirementList>
                <RequirementItem>Item</RequirementItem>
                <RequirementItem>Item</RequirementItem>
                <RequirementItem>Item</RequirementItem>
                <RequirementItem>Item</RequirementItem>
              </RequirementList>
            </RequirementContainer>
            <Divider></Divider>
            <WhatsappLink>
              <img src={WhatsappIcon} alt="" />
              Entrar em contato
            </WhatsappLink>
          </Details>
        </PetInfo>
      </Content>
    </Container>
  );
}
