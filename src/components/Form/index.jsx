import { 
  Label,
  FormContainer,
  ContentContainer,
  Button,
  Row
 } from './styles'

import Input from '../Input';

const Form = ({contentLabel}) => {
  return (
    <FormContainer>
      <Label>{contentLabel}</Label>

      <ContentContainer>
        <Input type={'text'}/>
        <Button>
          <Row position={'vertical'}/>
          <Row position={'horizontal'}/>
        </Button>
      </ContentContainer>
      
    </FormContainer>
  )
}

export default Form;