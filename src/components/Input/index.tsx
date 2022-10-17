import React from 'react'
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from 'react-hook-form'

import { InputContainer } from './styles'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
}

export function Input({
  register,
  error,
  id,
  onChange,
  label,
  placeholder,
  ...inputProps
}: IInput) {
  return (
    <InputContainer isErrored={!!error}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...register(id, {
          required: true,
          onChange,
        })}
        id={id}
        placeholder={placeholder}
        {...inputProps}
      />
      {error && <span>Campo obrigatótio</span>}
    </InputContainer>
  )
}
