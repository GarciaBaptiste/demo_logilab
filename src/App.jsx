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
  right: calc(50vw + var(--md));
  top: calc(50vh - (var(--lg) * 2.4));
  justify-content: flex-end;
`;

const MenuItem = styled.a`
  font-weight: 900;
  text-align: right;
  font-size: var(--lg);
  color: var(--blue);
`;

const AboutButton = styled.a`
  position: fixed;
  right: calc(50vw - 680px);
  top: calc(var(--lg) * 2.1);
  border-radius: 100%;
  padding: var(--sm) var(--md);
  color: var(--blue);
  background: var(--white);
`;

const Footer = styled.footer`
  position: fixed;
  width: 1360px;
  padding: var(--md);
  border-top: solid 1px var(--blue);
  left: calc(50vw - 680px - var(--md));
  bottom: 0;
  display: flex;
  align-items: center;
  gap: calc(var(--md) * 2);
`;

const StyledAddress = styled.address`
  font-size: var(--sm);
  font-style: normal;
  color: var(--orange);
  line-height: 135%;
  flex: 1;
`;

const SubFooter = styled.div`
  flex: 1;
  color: var(--blue);
  display: flex;
  align-items: center;
  gap: var(--md);
`;

const CTAButton = styled.a`
  padding: var(--sm);
  background: var(--blue);
  color: var(--white);
  border-radius: var(--md);
  display: inline-block;
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
      <AboutButton>À propos</AboutButton>
      <Footer>
        <StyledAddress>
          <p>Logilab — Paris-Toulouse-Valence</p>
          <p><a>(+33)1 45 32 03 12</a> — <a>contact@logilab.fr</a></p>
          <p>Site Internet construit avec CubicWeb</p>
        </StyledAddress>
        <SubFooter>
          <p>Un projet, une question ?</p>
          <CTAButton>Contactez-nous</CTAButton>
        </SubFooter>
      </Footer>
    </>
  )
}

export default App
