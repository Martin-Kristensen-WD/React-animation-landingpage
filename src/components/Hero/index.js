import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn,
    HeroBtnWrapper, 
} from './HeroElements'; 




const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer >
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>

                    <HeroH1 
                    initial={{ x: '-100vw'}}
                    animate={{ x: 1}}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 120}}>
                    DE BEDSTE PIZZAER OG DESSERTER!
                    </HeroH1>


                    <HeroP
                    initial={{ x: '-100vw'}}
                    animate={{ x: 1}}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 120}}>
                    Klar på 2 minutter. 
                    </HeroP>

                    <HeroBtnWrapper
                    initial={{ x: '-100vw'}}
                    animate={{ x: 1}}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 120}}
                    >
                    <HeroBtn 
                    animate={{scale: [1, 1.2, 1, 1],}}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 1],
                        loop: Infinity,
                        repeatDelay: 2
                      }}>
                    Bestil nu!
                    </HeroBtn>
                    </HeroBtnWrapper>

                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
