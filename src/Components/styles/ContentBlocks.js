import styled from 'styled-components'
import chevron from '../../icons/chevron.svg'

export const BlockWrapper = styled.div`
  color: #ffffff;
  animation-duration: 700ms;
  transition-timing-function: ease-in-out;
  padding: 0px 10px 20px 10px;

  .inline {
    display: flex;
    justify-content: space-between;
  }

  .inline input[type='text'] {
    width: calc(100% - 20px);
  }

  .inline div {
    width: 47%;
  }

  label {
    display: block;
    color: #a0a0a0;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
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
    border-radius: 3px;
    background: #383d41;
    color: #ffffff;
    margin-bottom: 12px;
    height: 22px;
    width: calc(100% - 20px);
    border: none;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0);
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 400;
  }

  > div {
    padding: 20px 20px 10px 20px;
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  > div:nth-child(even) {
    background-color: #292d2f;
  }

  > div:nth-child(odd) {
    background-color: #2e3235;
  }

  > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Block = styled.div`
  background: #2e3235;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
`

export const BlockForm = styled.div`
  padding: 20px 0 15px;
`

export const DropDown = styled.div`
  /* padding: 20px 20px 20px 20px; */
  padding-bottom: 10px;
  position: relative;
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background-color: #292d2f;
  }

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${chevron}) no-repeat 93% 48%;
    background-size: 16px 16px;
    color: #ffffff;
    border: none;
    border: 1px solid white;
    border-radius: 3px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.6px;
    padding: 8px 35px 6px 16px;
    cursor: pointer;
  }

  .handle {
    width: 20px;
    position: absolute;
    right: 0px;
    top: calc(50% - 4px);
    transform: translateY(-50%);
    -webkit-app-region: no-drag;
    cursor: -webkit-grab;
    padding-left: 10px;
  }
`

export const Remove = styled.p`
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  padding-left: 15px;
  padding-top: 3px;
  font-weight: 400;
`
