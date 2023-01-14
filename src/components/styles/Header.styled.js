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

  @media (min-width: 1440px) {
    width: 50%;
    float: left;
    text-align: left;
    height: 100vh;
    margin: 0;
    margin-top: -2.5%;
    padding-right: 5%;
    padding-left: 15%;

    h1 {
      font-size: 3em;
    }

    p {
      font-size: 18px;
    }
  }
`