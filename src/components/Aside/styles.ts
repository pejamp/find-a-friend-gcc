import styled from 'styled-components'

export const Container = styled.aside`
  width: 392px;
  height: 100vh;
  background-color: #f15156;
`

export const AsideHeader = styled.div`
  height: 241px;
  background-color: #e44449;

  
  & > div {
    padding: 81px 0 26px 56px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    
    > img {
      width: 45px;
    }
  }
`

export const HeaderInput = styled.div`
  display: grid;
  grid-template-columns: 67px 145px auto;
  gap: 12px;

  input {
    width: 203px;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 21px 16px;
    border-radius: 15px;
    background: transparent;
    border: 1px solid #f15156;
    outline: none;

    &::placeholder {
      color: #f2f2f2;
    }
  }

  button {
    width: 60px;
    height: 60px;

    img {
      width: 22px;
    }
  }
`

export const AsideContent = styled.div`
  height: calc(100vh - 241px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 35px 56px;
`

export const ContentHeader = styled.h1`
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 27px;
`

export const ContentFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const SelectWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 14px;
    width: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const HeaderSelect = styled.select`
  width: 100%;
  height: 60px;
  padding: 14px;
  border: 1px solid #F15156;
  border-radius: 15px;
  background-color: transparent;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  cursor: pointer;
  transition: all 300ms ease-out;

  option {
    font-family: 'Nunito';
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: #ffffff;
    padding: 8px;
    background-color: #E44449;
  }
`
