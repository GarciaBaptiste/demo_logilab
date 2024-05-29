import react from 'react'
import styled from 'styled-components'
import './App.css'

import LogilabLogo from './assets/logo_logilab.svg'

const StyledLogilabLogo = styled.img`
  position: fixed;
  width: 185px;
  left: calc(50vw - 680px);
  top: 70px;
`

function App() {
  return (
    <>
      <StyledLogilabLogo src={LogilabLogo} />
    </>
  )
}

export default App
