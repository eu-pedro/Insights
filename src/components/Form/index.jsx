// import useState
import { useState } from 'react'

import {
  Label,
  ContentContainer,
  Button,
  Row,
  Input,
  FormContainer
} from './styles'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

const Form = ({ contentLabel, showInsights }) => {
  const [titleInsights, setTitleInsights] = useState('')

  const notify = () => toast('Insight adicionado com sucesso!')

  const handleTitleInsights = e => {
    e.preventDefault()
    if(titleInsights === null || titleInsights === ""){
      return
    }
    showInsights(titleInsights);
  }

  return (
    <FormContainer onSubmit={handleTitleInsights}>
      <Label>{contentLabel}</Label>

      <ContentContainer>
        <Input
          type={'text'}
          onChange={e => setTitleInsights(e.target.value)}
          value={titleInsights}
        />
        <Button>
          <Row position={'vertical'} />
          <Row position={'horizontal'} />
        </Button>
      </ContentContainer>

      <ToastContainer />
    </FormContainer>
  )
}

export default Form
