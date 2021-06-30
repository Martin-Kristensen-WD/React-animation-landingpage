import styled from 'styled-components'; 
import { motion } from "framer-motion";

export const LoaderContainer = styled.div`
  padding: 1rem;
  background: #150f0f;
  color: #fff;
`;

export const Loader = styled(motion.div)`
    width: 10px;
    height: 10px;
    margin: 40px auto;
    border-radius: 50%;
    background: #fff; 

`;