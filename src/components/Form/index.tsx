import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { FiSearch } from 'react-icons/fi'

import { Button } from '../Button'
import { Input } from '../Input'

import { useFilters } from '../../hooks/Filters'

import { FormContainer } from './styles'
import { useEffect } from 'react'

interface IForm {
  onSubmit: SubmitHandler<FieldValues>
  largeTitle?: boolean
  isHome?: boolean
}

export function Form({ onSubmit, largeTitle = true, isHome = true }: IForm) {
  const { filters, updateFilters } = useFilters()

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: filters.value,
    },
  })

  useEffect(() => {
    setFocus('title')
  }, [setFocus])

  return (
    <FormContainer
      largeTitle={largeTitle}
      isHome={isHome}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Pesquise suas séries e filmes favoritos</h1>
      <Input
        id="title"
        type="text"
        name="title"
        placeholder="Procure seu Filme"
        register={register}
        onChange={(e) =>
          updateFilters({
            ...filters,
            value: e.target.value,
          })
        }
        error={errors.title}
      />
      <Button title="Buscar" icon={FiSearch} />
    </FormContainer>
  )
}
