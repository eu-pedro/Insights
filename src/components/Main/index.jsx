import { useState } from 'react'
import Form from '../Form/index'
import SectionContainer from '../Section'


import { MainContainer } from './styles'

const Main = () => {

  const [value, setValue] = useState(false);

  const handleValue = (state) => {
    console.log('entrou', state)
    setValue(state)
  }

  return (
    <MainContainer>
      <Form contentLabel={'Descreva seu insights:'} callbackParent={(state)=> handleValue(state)}/>
      <SectionContainer title={'Lista dos seus insights:'} valueType={value}/>
    </MainContainer>

    
  )
}

export default Main;