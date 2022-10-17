import { useNavigate } from 'react-router-dom'
import { SubmitHandler, FieldValues } from 'react-hook-form'

import { Form } from '../../components/Form'

export function Home() {
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FieldValues> = (data) => navigate('/listing')

  return <Form onSubmit={onSubmit} />
}
