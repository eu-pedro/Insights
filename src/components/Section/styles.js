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
  &:hover{
    cursor: pointer;
  }
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