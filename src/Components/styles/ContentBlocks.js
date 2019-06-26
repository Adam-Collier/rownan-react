import styled from 'styled-components'
import chevron from '../../icons/chevron.svg'

export const Block = styled.div`
  background: #2e3235;
`

export const DropDown = styled.div`
  padding: 20px 20px 20px 20px;
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
    width: 9px;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-app-region: no-drag;
    cursor: -webkit-grab;
    padding: 0 10px;
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
