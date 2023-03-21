import styled from "styled-components";

export const Container = styled.button`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4d35e;
  border: none;
  border-radius: 20px;
  transition: filter 300ms ease-out;

  img {
    width: 26px;
    object-fit: contain;
  }

  :hover {
    filter: brightness(0.9);
  }
`
