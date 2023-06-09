import styled from 'styled-components'

export const Container = styled.div`
  max-width: 280px;
  height: 209px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 3px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px -6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: all 300ms ease-out;

  &:hover {
    background-color: #0d3b66;

    div div {
      background-color: #0d3b66;
    }

    p {
      color: #ffffff;
    }
  }
`

export const TypeIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -30px;
  padding: 2px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
  }

  img {
    width: 15px;
  }
`

export const PetImage = styled.div`
  overflow: hidden;
  border-radius: 20px;
  height: 135px;
  
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const Name = styled.p`
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 700;
  margin: 8px auto 17px;
  color: #0d3b66;
`
