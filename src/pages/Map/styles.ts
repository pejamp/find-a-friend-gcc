import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  background-color: #fdeced;
  padding: 147px 112px 50px 32px;
  display: flex;
  flex-direction: column;
  gap: 46px;
  
  height: 100vh;
  overflow-y: scroll;
`

export const Header = styled.div`
  max-width: 904px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    color: #0d3b66;
  }
  span {
    font-weight: 800;
  }
`

export const SelectWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const HeaderSelect = styled.select`
  width: 210px;
  height: 48px;
  padding: 14px 18px;
  border: none;
  border-radius: 15px;
  background-color: #fbe1e2;
  outline: none;
  appearance: none;
  color: #0d3b66;
  cursor: pointer;
`

export const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 280px);
  align-content: flex-start;
  grid-gap: 32px;
`
