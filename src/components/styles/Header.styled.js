import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30vh;
  padding: 10%;
  margin: 15% 0 10% 0;
  text-align: center;
  color: white;

  h1 {
    margin-bottom: 5%;
    font-size: 1.5em;
    font-weight: ${({ theme }) => theme.weights.bolder};
  }
`