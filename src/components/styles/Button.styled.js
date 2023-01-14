import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;
  height: 6vh;
  margin: 0 auto 5% auto;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, .4);
  padding-top: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 16px;
  text-align: center; 
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.weights.bold};
`