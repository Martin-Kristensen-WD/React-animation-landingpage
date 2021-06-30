import styled from 'styled-components'; 
import ImgBg from '../../images/pizza-3.jpg';
import { motion } from "framer-motion";


export const HeroContainer = styled(motion.div)`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1400px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;


export const HeroH1 = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HeroP = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const HeroBtnWrapper = styled(motion.div)`

`;

export const HeroBtn = styled(motion.button)`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  color: #fff;
	background-color:#f24537;
	border-radius:6px;
	border:1px solid #f24537;
	cursor:pointer;
	text-decoration:none;
`
;
