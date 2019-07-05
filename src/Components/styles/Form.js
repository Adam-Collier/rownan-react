import styled from 'styled-components'

export const Form = styled.div`
  color: #ffffff;
  animation-duration: 700ms;
  transition-timing-function: ease-in-out;
  padding: 0px 20px 20px 20px;

  .inline {
    display: flex;
    justify-content: space-between;
  }

  .inline input[type='text'] {
    width: calc(100% - 10px);
  }

  .inline div {
    width: 49%;
  }

  label {
    display: block;
    color: #a0a0a0;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 6px;
    line-height: 1.1;
    letter-spacing: 0.5px;
  }

  span {
    display: inline-block;
    color: #848484;
    font-weight: 200;
    font-size: 12px;
    padding-right: 8px;
    letter-spacing: 0.6px;
  }

  input[type='text'] {
    background: #383d41;
    color: #ffffff;
    margin-bottom: 12px;
    height: 22px;
    width: calc(100% - 10px);
    border: none;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0);
    padding-left: 5px;
    font-size: 14px;
    font-weight: 300;
  }
`
