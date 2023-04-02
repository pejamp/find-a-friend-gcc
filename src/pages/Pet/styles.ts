import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Aside = styled.div`
  height: 100vh;
  width: 96px;
  background-color: #F15156;
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
  background: #F4D35E;
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
  background-color: #FDECED;
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
    color: #8FA7B2;
  }
`;

export const PetInfo = styled.div`
  max-width: 704px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding-bottom: 70px;
`;