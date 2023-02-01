import Form from "../Form/index";
import SectionContainer from "../Section";
import { InsightsContext } from "../../context/InsightsContext";

import { MainContainer } from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {

  const [insights, setInsights] = useState([])

  // const shareTitleInsights = (titleInsights) => {
  //   console.log(insights)
  //   let test = [
  //     ...insights,
  //     {
  //       title: titleInsights,
  //       date: handleDate(),
  //       bgColor: randomBgColor()
  //     }
  //   ]
  //   setInsights([
  //     ...insights,
  //     {
  //       title: titleInsights,
  //       date: handleDate(),
  //       bgColor: randomBgColor()
  //     },
  //     ...insights
  //   ])
  
  //   localStorage.setItem('card', JSON.stringify(test))

  // }

  
  return (
      <MainContainer>
        <Form
          contentLabel="Descreva seu insights:"
        />
        <SectionContainer
          title={"Lista dos seus insights:"}
        />
      </MainContainer>
  );
};

export default Main;
