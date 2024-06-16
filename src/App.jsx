import react, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Bounce } from 'gsap/all'

import LogilabLogo from './assets/logo_logilab.svg'
import SmileyFace from './assets/smiley_face.svg'

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
  align-items: flex-end;
`;

const MenuItemContent = styled.p`
  position: relative;  
  z-index: 1;
`;

const MenuItemUnderline = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  background: var(--orange);
  bottom: calc(var(--sm) / 2);
  z-index: 0;
  transition: 0.2s;
`;

const MenuItemWrapper = styled.a`
  font-weight: 900;
  text-align: right;
  font-size: var(--lg);
  color: var(--blue);
  position: relative;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    & > ${MenuItemUnderline} {
      height: var(--sm);
    }
  }
`;

const MenuItem = ({ children }) => {
  return (
    <MenuItemWrapper>
      <MenuItemContent>{children}</MenuItemContent>
      <MenuItemUnderline />
    </MenuItemWrapper>
  )
}

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
  justify-content: space-between;
`;

const SubFooterContact = styled.div`
  display: flex;
  align-items: center;
  gap: var(--md);
`;

const CTAButton = styled.a`
  padding: var(--sm) var(--md);
  background: var(--blue);
  color: var(--white);
  border-radius: var(--md);
  display: inline-block;
  transition: .3s;
  border: solid 1px var(--blue);
  &:hover {
    background: var(--white);
    color: var(--blue);
    cursor: pointer;
  }
`;

const SubFooterMiniButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const MiniButton = styled.button`
  width: var(--md);
  height: var(--md);
  border-radius: var(--md);
  border: solid 1px var(--blue);
  text-align: center;
  padding: 0;
`;

const MiniButtonLicence = () => {
  return (
    <MiniButton>cc</MiniButton>
  )
}

const MiniButtonSmiley = styled(MiniButton)`
  background-image: url(${SmileyFace});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const GSAPMiniButtonSmiley = () => {
  const buttonRef = useRef()

  useGSAP(() => {
    const element = buttonRef.current

    const handleMouseEnter = () => {
      gsap.to(element, { rotation: 90, duration: 0.5, ease: Bounce.easeOut })
    }

    const handleMouseLeave = () => {
      gsap.to(element, { rotation: 0, duration: 0.5, ease: Bounce.easeOut })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
  })

  return <MiniButtonSmiley ref={buttonRef} />
}

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
          <SubFooterContact>
            <p>Un projet, une question ?</p>
            <CTAButton>Contactez-nous</CTAButton>
          </SubFooterContact>
          <SubFooterMiniButtons>
            <MiniButtonLicence />
            <GSAPMiniButtonSmiley />
          </SubFooterMiniButtons>
        </SubFooter>
      </Footer>
    </>
  )
}

export default App
