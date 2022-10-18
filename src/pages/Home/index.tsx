import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, FieldValues } from 'react-hook-form'

import { Form } from '../../components/Form'
import { Spinner } from '../../components/Spinner'

export function Home() {
  const [isHome, setIsHome] = useState<boolean>(true)

  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsHome(false)
    setTimeout(() => {
      navigate('/listing')
    }, 1500)
  }

  return (
    <>
      <Form isHome={isHome} onSubmit={onSubmit} />

      {!isHome && <Spinner isLoading={!isHome} />}
    </>
  )
}
