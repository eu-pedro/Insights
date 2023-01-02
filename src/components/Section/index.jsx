import { useEffect, useState } from 'react'
import { 
  TitleContent,
  SectionCards,
  Card,
  ContentCard
 } from './styles'

const SectionContainer = ({title}) => {

  const [arrInsights, setArrInsights] = useState([])

  useEffect(() => {
    setArrInsights(JSON.parse(localStorage.getItem('title')))
  }, [])

  

  
  
  

  return (
    
      
        <>
        <TitleContent>{title}</TitleContent>
        <SectionCards>
          {arrInsights?.map((item, index) => (
            <Card key={index}>
              <ContentCard>{item}</ContentCard>
            </Card>
          ))}
          
        </SectionCards>
        </>
  
    
  )
}

export default SectionContainer