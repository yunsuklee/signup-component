import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 85%;
  margin: 5% auto;
  padding: 5%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, .15);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;  

  input {
    width: 100%;
    height: 6vh;
    padding-left: 5%;
    margin-bottom: 5%;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.weights.bold};
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, .15);
  }
  
  input:focus {
    outline: solid 1px ${({ theme }) => theme.colors.dark_blue};
  }

  p {
    width: 90%;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grayish_blue};
  }

  span {
    font-weight: ${({ theme }) => theme.weights.bolder};
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
  }
`