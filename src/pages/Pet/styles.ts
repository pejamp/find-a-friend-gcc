import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Aside = styled.div`
  height: 100vh;
  width: 96px;
  background-color: #f15156;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 46px;
  height: 46px;
  object-fit: contain;
`;

export const BackButton = styled.button`
  background: #f4d35e;
  border: 0;
  padding: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  transition: filter 300ms ease-out;

  :hover {
    filter: brightness(0.9);
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: #fdeced;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 32px;
  height: 100vh;
  overflow-y: scroll;

  & > p {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #8fa7b2;
  }
`;

export const PetInfo = styled.div`
  max-width: 704px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const Details = styled.div`
  padding: 70px 72px;
`;

export const PetName = styled.h1`
  font-weight: 800;
  font-size: 54px;
  line-height: 90%;
  color: #0d3b66;
  margin-bottom: 26px;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d3b66;
  margin-bottom: 43px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #D3E2E5;
`

export const WhatsappLink = styled.a`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 16px;
  background-color: #3CDC8C;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  margin-top: 50px;
`

export const RequirementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 0;
`;

export const RequirementList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RequirementItem = styled.li`
  background: linear-gradient(129.72deg, rgba(247, 95, 96, 0.1) 16.45%, rgba(241, 81, 86, 0) 67.3%);
  border: 1px solid #F15156;
  border-radius: 10px;
  padding: 13px 40px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #F15156;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url('/src/assets/icons/alert.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 90%;
  color: #0D3B66;
`;

export const AddressContainer = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

export const Address = styled.div`
  
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #0D3B66;
    margin-top: 5px;
  }
`;

export const PetBadge = styled.div`
  width: 64px;
  height: 64px;
  background-color: #F27006;
  border-radius: 15px;
  background-image: url('/src/assets/icons/logo.svg');
  background-repeat: no-repeat;
  background-size: 28px;
  background-position: center;
`;

export const TelNumber = styled.div`
  background: rgba(13, 59, 102, 0.05);
  border-radius: 10px;
  padding: 13px 27px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 18px;
  line-height: 28px;
  color: #0D3B66;
  margin-top: 18px;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url('/src/assets/icons/whatsapp-fill.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
