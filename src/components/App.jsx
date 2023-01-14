import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import userServices from '../services/users'
import GlobalStyles from './styles/Global'
import Header from './Header'
import Trial from './Trial'
import Form from './Form'

const theme = {
  colors: {
    red: 'hsl(0, 100%, 74%)',
    green: 'hsl(154, 59%, 51%)',
    blue: 'hsl(248, 32%, 49%)',
    dark_blue: 'hsl(249, 10%, 26%)',
    grayish_blue: 'hsl(246, 25%, 77%)'
  },
  weights: {
    thin: 400,
    regular: 500,
    bold: 600,
    bolder: 700
  },
  widths: {
    mobile: '375px',
    desktop: '1440px'
  }
}

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    userServices
      .getAll()
      .then(currentUsers => {
        setUsers(currentUsers)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const currentUser = users.find(u => u.email === user.email)

    if (currentUser) {
      alert(`The email ${user.email} is already in use`)
    } else {
      const newUser = { ...user, id: users.length + 1 }
      userServices
        .register(newUser)
        .then(res => {
          console.log(res)
          setUsers(users.concat(newUser))
          window.confirm(`Welcome ${newUser.first_name}!`)
        })
    }
    setUser({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    })
  }

  const handleFirstNameChange = (event) => {
    const newUser = {
      ...user,
      first_name: event.target.value
    }
    setUser(newUser)
  }

  const handleLastNameChange = (event) => {
    const newUser = {
      ...user,
      last_name: event.target.value
    }
    setUser(newUser)
  }

  const handleEmailChange = (event) => {
    const newUser = {
      ...user,
      email: event.target.value
    }
    setUser(newUser)
  }

  const handlePasswordChange = (event) => {
    const newUser = {
      ...user,
      password: event.target.value
    }
    setUser(newUser)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Trial />
        <Form
          newUser={user}
          handleSubmit={handleSubmit}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
      </>
    </ThemeProvider>
  )
}

export default App
