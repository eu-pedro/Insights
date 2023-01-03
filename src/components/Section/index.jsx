import { useEffect, useState } from 'react'
import { 
  TitleContent,
  SectionCards,
  Card,
  ContentCard,
  ContentDate
 } from './styles'

const SectionContainer = ({title}) => {

  const [arrInsights, setArrInsights] = useState([])

  useEffect(() => {
    setArrInsights(JSON.parse(localStorage.getItem('title')))
  }, [])

 
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
    const bg = randomColor[id]
    return bg.background
  }
  
  
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date().toLocaleDateString('pt-br', options);
  
  console.log(date.split("de"))
  const formatMounth = date.split("de")[1].slice(0,4)
  const formatDate = `${date.split("de")[0].trim()}/${formatMounth.trim()}/${date.split("de")[2].trim()}`
  
  return (
    
      
        <>
        <TitleContent>{title}</TitleContent>
        <SectionCards>
          {arrInsights?.map((item, index) => (
            <Card key={index} background={randomBgColor()}>
              <ContentCard>{item}</ContentCard>
              <ContentDate>{formatDate}</ContentDate>
            </Card>
          ))}
          
        </SectionCards>
        </>
  
    
  )
}

export default SectionContainer