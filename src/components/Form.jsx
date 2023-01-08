import React from 'react'
import { StyledForm } from './styles/Form.styled'
import Button from './Button'

const Form = (props) => {
  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <input 
        type="text" 
        placeholder="First Name" 
        name="first-name"
        required 
        value={props.newUser.first_name}
        onChange={props.handleFirstNameChange}
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        name="last-name"
        required 
        value={props.newUser.last_name}
        onChange={props.handleLastNameChange}
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        name="email"
        required 
        value={props.newUser.email}
        onChange={props.handleEmailChange}
      />
      <input 
        type="password" 
        placeholder="Password" 
        name="password"
        required 
        value={props.newUser.password}
        onChange={props.handlePasswordChange}
      />
      <Button />
      <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
    </StyledForm>
  )
}

export default Form