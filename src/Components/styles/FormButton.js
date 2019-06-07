import styled from 'styled-components'

export const FormButton = styled.input`
  width: calc(100% - 40px);
  height: 40px;
  background: white;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  text-align: center;
  display: block;
  margin: 40px auto;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  &:focus {
    outline: none;
    cursor: pointer;
  }
`
