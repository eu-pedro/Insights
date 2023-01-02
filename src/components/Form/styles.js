import styled, { css } from "styled-components";

export const Label = styled.label`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  color: #fff;
  display: block;
  margin-bottom: 10px;
`

export const ContentContainer = styled.section`
  display: flex;

  width: 500px;
  height: 100px;
  background: #444444;
  border-radius: 24px;
`

export const Button = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  border: none;
  background-color: #FFD131;
  margin: auto 12px;
  cursor: pointer;

  position: relative;
  transition: all .5s ease-in-out;

  &:hover{
    box-shadow: 0 6px 10px 8px rgba(0, 0, 0, 0.2)
  }
`

export const Row = styled.div`
  position: absolute;

  top: 21px;
  left: 12px;
  width: 22px;
  height: 2px;
  background-color: #171717;

  ${props => props.position == "vertical" && css`
    top: 11px;
    left: 0;
    right: 0;
    height: 22px;
    width: 2px;
    background-color: #171717;
    margin: auto;
  `}
`

export const Input = styled.input`
  background: #262626;
  width: 394px;
  height: 46px;
  border: 2px solid #696969;
  border-radius: 8px;
  margin: auto 15px;
  transition: all .1s ease;
  font-size: 22px;
  color: white;
  padding-left: 10px;

  &:focus{
    outline: 2px solid #FFD131;
  }
`