import { useState, useEffect } from "react";
import Modal from "../Modal";
import {
  TitleContent,
  SectionCards,
  Card,
  ContentCard,
  ContentDate,
  MessageNoContent,
} from "./styles";
import { useContext } from "react";
import { InsightsContext } from "../../context/InsightsContext";

const SectionContainer = ({ title }) => {
  const [insightsCards, setInsightsCards] = useState([]);
  const [message, setMessage] = useState("Você não possui nenhum insight");
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState("");
  const [titleInsights, setTitleInsights] = useState("");
  const [date, setDate] = useState("");

  const { insights, setInsights } = useContext(InsightsContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('card'))
    console.log(data)
    if (data) {
      setInsights(data)
    } 
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleContent = (item) => {
    setTitleInsights(item.title);
    setBackground(item.bgColor);
    setDate(item.date);
    setIsOpen(true);
  };

  return !!insightsCards ? (
    <>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          background={background}
          title={titleInsights}
          date={date}
        />
      )}
      <TitleContent>{title}</TitleContent>
      <SectionCards>
        {insights?.map((item, index) => (
          <Card
            background={item.bgColor}
            key={index}
            onClick={() => handleContent(item)}
          >
            <ContentCard>{item.title}</ContentCard>
            <ContentDate>{item.date}</ContentDate>
          </Card>
        ))}
      </SectionCards>
    </>
  ) : (
    <MessageNoContent>{message}</MessageNoContent>
  );
};

export default SectionContainer;
