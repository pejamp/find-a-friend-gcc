import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: transparent;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`;

export const Banner = styled.img`
  width: 100%;
  height: 336px;
  object-fit: cover;
`;

export const ImageList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 72px;
`;

export const ImageItem = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: #EBF2F5;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: opacity 300ms ease-out;
  
  img {
    width: 100px;
  }

  input {
    inset: 0;
    overflow: hidden;
    position: absolute;
    appearance: none;
    cursor: pointer;
  }

  &:hover, &:has(input:checked) {
    border: 4px solid #0D3B66;
    opacity: 1;
  }
`;