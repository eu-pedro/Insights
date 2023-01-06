import { useEffect, useState } from 'react'
import Modal from '../Modal'
import {
  TitleContent,
  SectionCards,
  Card,
  ContentCard,
  ContentDate
} from './styles'

const SectionContainer = ({ title }) => {
  const [arrInsights, setArrInsights] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setArrInsights(JSON.parse(localStorage.getItem('card')))
  }, [])


  const closeModal = () => {
    setIsOpen(false)
  }

  

  return (
    <>
      {isOpen && <Modal closeModal={closeModal} bgColor={'red'}/>}
      <TitleContent>{title}</TitleContent>
      <SectionCards>
        {arrInsights?.map((item, index) => (
          <Card
            background={item.bgColor}
            key={index}
            onClick={() => setIsOpen(true)}
          >
            <ContentCard>{item.title}</ContentCard>
            <ContentDate>{item.date}</ContentDate>
          </Card>
        ))}
      </SectionCards>
    </>
  )
}

export default SectionContainer
