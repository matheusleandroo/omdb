import { useNavigate } from 'react-router-dom'
import { SubmitHandler, FieldValues } from 'react-hook-form'

import { HomeContainer } from './styles'
import { Form } from '../../components/Form'

export function Home() {
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FieldValues> = (data) => navigate('/listing')

  return (
    <HomeContainer>
      <Form onSubmit={onSubmit} />
    </HomeContainer>
  )
}
