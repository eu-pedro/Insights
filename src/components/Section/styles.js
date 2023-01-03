import styled from "styled-components";

export const TitleContent = styled.h3`
  color: #fff;
  width: 100%;
  padding-top: 30px;
  font-weight: 400;
  font-size: 18px;
`

export const SectionCards = styled.section`
  width: 100%;
  height: auto;
  margin-inline: auto;
  margin-top: 15px;
 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
`

export const Card = styled.section`
  width: 100%;
  background: ${props => props.background};
  border-radius: 10px;
  padding: 25px 16px;
<<<<<<< HEAD
  &:hover{
    cursor: pointer;
  }
=======
>>>>>>> 707bea68fdf6db7d4007875d6d23149c8a73be35
`

export const ContentCard = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  width:100%;
  color: #FFF;
  text-align: left;
`

export const ContentDate = styled.p`
  margin-top: 5px;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  color: #FFFFFF;
`