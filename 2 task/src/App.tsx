import { useState } from 'react'
import styled from 'styled-components'
import Balls from './components/Balls/Balls'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'


const AppContainer = styled.section`
  width: 1140px;

  @media screen and (min-width: 320px) and (max-width: 425px) {
  }
`

const AppWrapper = styled.div`
  width: 100%;
  background: #1E1E1E;
  display: flex;
  justify-content: center;
  padding-top: 46px;
  padding-bottom: 20px;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    min-width: 320px;
    max-width: 425px;
    padding: 0;
  }
`

function App() {

  return (
    <AppWrapper>
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
      <Balls />
    </AppWrapper>
  )
}

export default App
