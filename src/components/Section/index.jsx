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

  const randomId = () => {
    
  }

  
  const randomBgColor = () => {
    const randomColor = [
      {id: 1, background: '#D00000'},
      {id: 2, background: '#FFBA08'},
      {id: 3, background: '#3F88C5'},
      {id: 4, background: '#FF499E'},
      {id: 5, background: '#712F79'},
      {id: 6, background: '#226F54'},
      {id: 7, background: '#7A542E'}
    ]
    
    const id = Math.floor(Math.random() * randomColor.length)
    console.log(id)
    const result = randomColor.filter((item) => item.id === id)
    const bg = result[0]
    return bg
  }
  
  
  
  
  

  return (
    
      
        <>
        <TitleContent>{title}</TitleContent>
        <SectionCards>
          {arrInsights?.map((item, index) => (
            <Card key={index} background={randomBgColor()}>
              <ContentCard>{item}</ContentCard>
            </Card>
          ))}
          
        </SectionCards>
        </>
  
    
  )
}

export default SectionContainer