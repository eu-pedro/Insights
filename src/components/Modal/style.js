import styled from "styled-components";

export const Alert = styled.div`
  background-color: ${props => props.background};
  position: absolute;
  bottom: 1px;
  width: 100%;
  height: 100%;


  display: flex;
  flex-direction: column;
  color: #fff;
`
export const CloseButton = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
  margin-right: 10px;

  position: absolute;
  right: 18px;
  top: 10px;

`

export const ModalContent = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`