import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin: 10% 0;
  padding-bottom: 5%;
  width: 100%;
  text-align: center;
  overflow: hidden;
  
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.dark_blue};
  }
  
  a, a:visited, a:active {
    text-decoration: none;
  }
  
  a {
    display: block;
    color: hsl(250, 90%, 60%);
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`