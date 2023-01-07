import React from 'react'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
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

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Trial />
        <Form />
      </>
    </ThemeProvider>
  )
}

export default App
