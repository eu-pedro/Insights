import { useEffect, useState } from 'react'
import Modal from '../Modal';
import { 
  TitleContent,
  SectionCards,
  Card,
  ContentCard,
  ContentDate
 } from './styles'

const SectionContainer = ({title}) => {

  const [arrInsights, setArrInsights] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setArrInsights(JSON.parse(localStorage.getItem('title')))
  }, [])

<<<<<<< HEAD
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date().toLocaleDateString('pt-br', options);
  
  const formatMounth = date.split("de")[1].slice(0,4)
  const formatDate = `${date.split("de")[0].trim()}/${formatMounth.trim()}/${date.split("de")[2].trim()}`

=======
>>>>>>> 707bea68fdf6db7d4007875d6d23149c8a73be35
 
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
  
  const closeModal = () => {
    setIsOpen(false)
  }
  
<<<<<<< HEAD
  console.log(arrInsights[0])

=======
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date().toLocaleDateString('pt-br', options);
  
  console.log(date.split("de"))
  const formatMounth = date.split("de")[1].slice(0,4)
  const formatDate = `${date.split("de")[0].trim()}/${formatMounth.trim()}/${date.split("de")[2].trim()}`
>>>>>>> 707bea68fdf6db7d4007875d6d23149c8a73be35
  
  return (
        <>
        {isOpen && (
          <Modal closeModal={closeModal} bgAlert={randomBgColor}/>
        )}
        <TitleContent>{title}</TitleContent>
        <SectionCards>
          {arrInsights?.map((item, index) => (
            <Card key={index} background={randomBgColor} onClick={()=> setIsOpen(true)}>
              <ContentCard>{item}</ContentCard>
              <ContentDate>{formatDate}</ContentDate>
            </Card>
          ))}
          
        </SectionCards>
        </>
  
    
  )
}

export default SectionContainer