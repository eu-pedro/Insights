import { useState } from 'react'
import { 
  TitleContent,
  SectionCards,
  Card,
  ContentCard
 } from './styles'

const SectionContainer = ({title}) => {

  const [contentInsights, setContentInsights] = useState([]);

  const getItem = () => {
    
    const item = localStorage.getItem('title')
    console.log(item)
    
  }

  getItem();

  return (
    <>
      <TitleContent>{title}</TitleContent>
      <SectionCards>
        <Card>
          <ContentCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in nesciunt quae! Atque eveniet quisquam ut iusto, laudantium possimus ad distinctio sequi rerum.</ContentCard>
        </Card>
        
      </SectionCards>
    </>
  )
}

export default SectionContainer