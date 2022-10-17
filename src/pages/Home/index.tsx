import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Button } from '../../components/Button'
import { useFilters } from '../../hooks/Filters'

import { HomeContainer } from './styles'
import { Input } from '../../components/Input'

export function Home() {
  const navigate = useNavigate()

  const { filters, updateFilters } = useFilters()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: filters.value,
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => navigate('/listing')

  return (
    <HomeContainer>
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
      </form>
    </HomeContainer>
  )
}
