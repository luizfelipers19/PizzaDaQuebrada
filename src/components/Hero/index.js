import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1,HeroP,HeroBtn} from './HeroElements'

const Hero = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
      <HeroContainer>
          <Navbar toggle={toggle}></Navbar>
          <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
          <HeroContent>
            <HeroItems>
              <HeroH1>A Melhor Pizza da Quebrada!</HeroH1>
              <HeroP>Os melhores ingredientes, arte e muita técnica!</HeroP>
              <HeroBtn>Fazer um Pedido!</HeroBtn>
            </HeroItems>
          </HeroContent>
      </HeroContainer> 

    );
}

export default Hero
