import styled from 'styled-components'

export const StyledTrial = styled.div`
  width: 85%;
  height: 10vh;
  margin: auto;
  background-color: ${({theme}) => theme.colors.blue};
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, .15);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-align: center;  

  p {
    width: 70%;
  }

  span {
    font-weight: ${({theme}) => theme.weights.bolder};
  }
`