import React from 'react'
import { StyledForm } from './styles/Form.styled'
import Button from './Button'

const Form = () => {
  return (
    <StyledForm>
      <input type="text" placeholder="First Name" name="first-name" required />
      <input type="text" placeholder="Last Name" name="last-name" required />
      <input type="email" placeholder="Email Address" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <Button />
      <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
    </StyledForm>
  )
}

export default Form