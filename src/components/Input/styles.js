import styled from 'styled-components'

export const InputContainer = styled.input`
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