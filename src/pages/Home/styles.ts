import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #F15156;
  padding: 124px 0;
  margin: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const LeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 126px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 54px;
    height: 56px;
    object-fit: contain;
  }

  span {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 72px;
  line-height: 64.8px;
  max-width: 487px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  max-width: 407px;
`;

export const Banner = styled.div`
  width: 592px;
  height: 305px;

  img {
    object-fit: cover;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    line-height: 34px;
    margin-right: 23px;
  }
`;

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    object-fit: contain;
  }

  &:first-of-type {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-right: 32px;
  }
`

interface FilterProps {
  scale: 'small' | 'large';
}

export const FilterInput = styled.select<FilterProps>`
  width: ${props => props.scale === 'small' && '72px' || props.scale === 'large' && '280px'};
  height: 72px;
  padding: 20px 22px 20px 12px;
  background-color: #E44449;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 20px;
  line-height: 34px;
  font-weight: 700;
  color: #ffffff;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 300ms ease-out;

  &:hover, &:focus, &:active {
    border: 1px solid #FFFFFF;
    background-color: transparent;
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 8px;
  background-color: #E44449;
`
