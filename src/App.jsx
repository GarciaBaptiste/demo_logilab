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

const MainMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 50vw;
  top: calc(50vh - (var(--lg) * 2.4));
  justify-content: flex-end;
`;

const MenuItem = styled.a`
  font-family: "WorkSans";
  font-weight: 900;
  text-align: right;
  font-size: var(--lg);
  color: var(--blue);
`;

function App() {
  return (
    <>
      <StyledLogilabLogo src={LogilabLogo} />
      <MainMenu>
        <MenuItem>La société</MenuItem>
        <MenuItem>Nos formations</MenuItem>
        <MenuItem>Nos clients</MenuItem>
        <MenuItem>Web sémantique</MenuItem>
      </MainMenu>
    </>
  )
}

export default App
