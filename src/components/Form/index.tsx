import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import { Button } from '../Button'
import { Input } from '../Input'

import { useFilters } from '../../hooks/Filters'

interface IForm {
  onSubmit: SubmitHandler<FieldValues>
}

export function Form({ onSubmit }: IForm) {
  const { filters, updateFilters } = useFilters()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: filters.value,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="title"
        type="text"
        name="title"
        register={register}
        onChange={(e) =>
          updateFilters({
            ...filters,
            value: e.target.value,
          })
        }
        error={errors.title}
      />
      <Button title="Buscar" />
      <DevTool control={control} />
    </form>
  )
}
