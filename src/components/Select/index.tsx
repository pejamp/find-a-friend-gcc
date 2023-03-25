import chevron from '@/assets/icons/chevron-bottom.svg'
import { ComponentProps, SelectHTMLAttributes } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  name: string
  options: {
    value: string | number
    label: string
  }[]
}

export function Select({ label, name, options, ...rest }: SelectProps) {
  return (
    <Filter>
      <FilterLabel htmlFor={name}>{label}</FilterLabel>
      <FilterWrapper>
        <FilterInput name={name} id={name} {...rest}>
          <FilterInputOption value="" disabled selected>
            Selecione
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </FilterInputOption>
            )
          })}
        </FilterInput>
        <img src={chevron} alt="" />
      </FilterWrapper>
    </Filter>
  )
}
