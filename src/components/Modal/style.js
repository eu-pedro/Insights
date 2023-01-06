import styled from "styled-components";

export const Alert = styled.div`
  background-color: ${props => props.bgColor};
  position: absolute;
  bottom: 1px;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 10px;
`

export const ModalContent = styled.h2`
  color: black;
`