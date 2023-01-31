import Form from "../Form/index";
import SectionContainer from "../Section";
import { InsightsContext } from "../../context/InsightsContext";

import { MainContainer } from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {

  const [insights, setInsights] = useState([])

  const handleDate = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    let date = new Date().toLocaleDateString('pt-br', options)

    const formatMounth = date.split('de')[1].slice(0, 4)
    const formatDate = `${date
      .split('de')[0]
      .trim()}/${formatMounth.trim()}/${date.split('de')[2].trim()}`
    return formatDate
  }

  const randomBgColor = () => {
    const randomColor = [
      { id: 1, background: '#D00000' },
      { id: 2, background: '#FFBA08' },
      { id: 3, background: '#3F88C5' },
      { id: 4, background: '#FF499E' },
      { id: 5, background: '#712F79' },
      { id: 6, background: '#226F54' },
      { id: 7, background: '#7A542E' }
    ]

    const id = Math.floor(Math.random() * randomColor.length)
    const bg = randomColor[id]
    return bg.background
  }

  const shareTitleInsights = (titleInsights) => {
    console.log(insights)
    let test = [
      ...insights,
      {
        title: titleInsights,
        date: handleDate(),
        bgColor: randomBgColor()
      }
    ]
    setInsights([
      ...insights,
      {
        title: titleInsights,
        date: handleDate(),
        bgColor: randomBgColor()
      },
      ...insights
    ])
  
    localStorage.setItem('card', JSON.stringify(test))

  }

  
  
  
  return (
    <InsightsContext.Provider value={{insights, setInsights}}>
      <MainContainer>
        <Form
          contentLabel="Descreva seu insights:"
          showInsights={(titleInsights)=> shareTitleInsights(titleInsights)}
        />
        <SectionContainer
          title={"Lista dos seus insights:"}
        />
      </MainContainer>
    </InsightsContext.Provider>
  );
};

export default Main;
