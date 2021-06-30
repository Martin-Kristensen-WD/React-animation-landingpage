import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Dagens pizza</h1>
            <p>Lækker alfredo sauce toppet med guld støv.</p>
            <FeatureButton
            animate={{scale: [1, 1.2, 1, 1],}}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 1],
                loop: Infinity,
                repeatDelay: 2
            }}>
            Bestil nu!
            </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
