import React from 'react'
import { Loader, LoaderContainer } from './LoaderElements'; 

// Framer Motion Variants
const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
    transition: {
        x: {
            yoyo: Infinity, 
            duration: 0.5
        },
        y: {
            yoyo: Infinity, 
            duration: 0.25,
            ease: 'easeOut'
        }     
     }
  }
}

const LoaderAnimation = () => {
    return (
        <LoaderContainer>
        <Loader
            variants={loaderVariants}
            animate="animationOne">
        </Loader>
        </LoaderContainer>
        
    )
}

export default LoaderAnimation; 