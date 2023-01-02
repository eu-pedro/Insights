import Form from '../Form/index'
import SectionContainer from '../Section'

import { MainContainer } from './styles'

const Main = () => {
  return (
    <MainContainer>
      <Form contentLabel={'Descreva seu insights:'}/>
      <SectionContainer title={'Lista dos seus insights:'}/>
    </MainContainer>

    
  )
}

export default Main;