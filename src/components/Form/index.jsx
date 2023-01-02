// import useState
import { useState } from 'react';


import { 
  Label,
  ContentContainer,
  Button,
  Row,
  Input
 } from './styles'


const Form = ({contentLabel}) => {

  const [insights, setInsights] = useState("")
  const [myArray] = useState([])

  const handleInsights = (e) => {
    e.preventDefault();

    if (insights === "" || insights === undefined) return;

    myArray.push(insights)
    console.log(myArray)
    
    localStorage.setItem('title', myArray)
  
  }

  



  return (
    <form onSubmit={handleInsights}>
      <Label>{contentLabel}</Label>

      <ContentContainer>
        <Input type={'text'} onChange={(e)=> setInsights(e.target.value)}/>
        <Button>
          <Row position={'vertical'}/>
          <Row position={'horizontal'}/>
        </Button>
      </ContentContainer>
      
    </form>
  )
}

export default Form;