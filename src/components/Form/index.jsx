// import useState
import { useState } from 'react';


import { 
  Label,
  ContentContainer,
  Button,
  Row,
  Input, 
  FormContainer
 } from './styles'


const Form = ({contentLabel}) => {

  const [insights, setInsights] = useState("")
  
  let arr = [];

  const handleInsights = (e) => {

    e.preventDefault();

    if (insights === "" || insights === undefined) return;
    

    if(localStorage.title){
      arr = JSON.parse(localStorage.getItem('title'))
    }


    arr.push(insights)
    localStorage.title = JSON.stringify(arr)
    alert('Card adicionado com sucesso!')
    document.location.reload(true);
  }

  



  return (
    <FormContainer onSubmit={handleInsights}>
      <Label>{contentLabel}</Label>

      <ContentContainer>
        <Input type={'text'} onChange={(e)=> setInsights(e.target.value)}/>
        <Button>
          <Row position={'vertical'}/>
          <Row position={'horizontal'}/>
        </Button>
      </ContentContainer>
      
    </FormContainer>
  )
}

export default Form;