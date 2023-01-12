// import useState
import { useEffect, useState } from 'react'

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

const Form = ({ contentLabel, callbackParent }) => {
  const [object, setObject] = useState([])
  const [titleInsights, setTitleInsights] = useState('')

  const notify = () => toast('Insight adicionado com sucesso!')

  const handleInsights = e => {
    e.preventDefault()

    // if (insights === '' || insights === undefined) return

    const handleDate = () => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      let date = new Date().toLocaleDateString('pt-br', options)

      const formatMounth = date.split('de')[1].slice(0, 4)
      const formatDate = `${date
        .split('de')[0]
        .trim()}/${formatMounth.trim()}/${date.split('de')[2].trim()}`
      return formatDate
    }

    const randomBgColor = () => {
      const randomColor = [
        { id: 1, background: '#D00000' },
        { id: 2, background: '#FFBA08' },
        { id: 3, background: '#3F88C5' },
        { id: 4, background: '#FF499E' },
        { id: 5, background: '#712F79' },
        { id: 6, background: '#226F54' },
        { id: 7, background: '#7A542E' }
      ]

      const id = Math.floor(Math.random() * randomColor.length)
      const bg = randomColor[id]
      return bg.background
    }

    let test = [
      ...object,
      {
        title: titleInsights,
        date: handleDate(),
        bgColor: randomBgColor()
      }
    ]
    callbackParent(test)
    setObject(prevObject => [
      ...prevObject,
      {
        title: titleInsights,
        date: handleDate(),
        bgColor: randomBgColor()
      }
    ])

    localStorage.setItem('card', JSON.stringify(test))
  }

  return (
    <FormContainer onSubmit={handleInsights}>
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
