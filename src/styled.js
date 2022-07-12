import styled from "styled-components"

export const DirectionButons = styled.button`
  position: relative;
  left: ${(props) => (props.direction === 'right' ? '100px' : '')};
  right: ${(props) => (props.direction === 'left' ? '100px' : '')};
  bottom: ${(props) =>
    props.direction === 'left'
      ? '50px'
      : props.direction === 'down'
      ? '50px'
      : ''};
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: rgb(255, 0, 212);
`

export const DivForDirectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`