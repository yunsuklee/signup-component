import Button from './Button'
import { StyledForm } from './styles/Form.styled'

const Form = (props) => {
  const handleInvalid = (e) => {
    switch (e.target.name) {
    case 'first-name':
      e.target.setCustomValidity('First Name cannot be empty')
      break
    case 'last-name':
      e.target.setCustomValidity('Last Name cannot be empty')
      break
    case 'email':
      e.target.setCustomValidity('Looks like this is not an email')
      break
    case 'password':
      e.target.setCustomValidity('Password cannot be empty')
      break
    default:
      break
    }
  }

  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="first-name"
        required
        value={props.newUser.first_name}
        onChange={props.handleFirstNameChange}
        onInvalid={handleInvalid}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last-name"
        required
        value={props.newUser.last_name}
        onChange={props.handleLastNameChange}
        onInvalid={handleInvalid}
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        required
        value={props.newUser.email}
        onChange={props.handleEmailChange}
        onInvalid={handleInvalid}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        value={props.newUser.password}
        onChange={props.handlePasswordChange}
        onInvalid={handleInvalid}
      />
      <Button />
      <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
    </StyledForm>
  )
}

export default Form