import { useEffect, useState } from 'react'
import Modal from '../Modal'
import {
  TitleContent,
  SectionCards,
  Card,
  ContentCard,
  ContentDate,
  MessageNoContent
} from './styles'

const SectionContainer = ({ title, valueType }) => {

  const [insights, setInsights] = useState([])
  const [message, setMessage] = useState("Você não possui nenhum insight")
  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState("") 
  const [titleInsights, setTitleInsights] = useState("")
  const [date, setDate] = useState("")

  
  useEffect(() => {
    setInsights(JSON.parse(localStorage.getItem('card')))
    console.log(valueType)
  }, [insights])
  
  
  // console.log(localStorage.getItem('card'))

  const closeModal = () => {
    setIsOpen(false)
  }
  

  const handleContent = (item) => {
    setTitleInsights(item.title)
    setBackground(item.bgColor)
    setDate(item.date)
    setIsOpen(true)
   }

  return (
   
      !!insights ? (
        <>
          {isOpen && <Modal closeModal={closeModal} background={background} title={titleInsights} date={date}/>}
          <TitleContent>{title}</TitleContent>
          <SectionCards>
            {insights?.map((item, index) => (
              <Card
                background={item.bgColor}
                key={index}
                onClick={()=> handleContent(item)}
              >
                <ContentCard>{item.title}</ContentCard>
                <ContentDate>{item.date}</ContentDate>
              </Card>
            ))}
          </SectionCards>
        </>
      ) : (
        <MessageNoContent>{message}</MessageNoContent>
      ) 
    
  )
}

export default SectionContainer
