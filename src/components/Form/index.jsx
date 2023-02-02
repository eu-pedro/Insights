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
import { useContext } from 'react'
import { InsightsContext } from '../../context/InsightsContext'

const Form = ({ contentLabel }) => {
  const { insights, setInsights, handleDate, randomBgColor } = useContext(InsightsContext)
  const [titleInsights, setTitleInsights] = useState('')

  const notify = () => toast('Insight adicionado com sucesso!')

  const handleTitleInsights = e => {
    e.preventDefault()
    if(titleInsights === null || titleInsights === ""){
      return
    }

    const insight = [
      ...insights,
      {
        title: titleInsights,
        date: handleDate(),
        bgColor: randomBgColor()
      },
  
    ]

    setInsights(insight)

    localStorage.setItem('card', JSON.stringify([
      ...insights,
      {
        title: titleInsights,
        date: handleDate(),
        bgColor: randomBgColor()
      }
    ]))
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
