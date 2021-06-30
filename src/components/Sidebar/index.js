import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink whileHover={{  y: -10, color: '#e31837'}} to="/"> Pizza</SidebarLink>
                <SidebarLink whileHover={{  y: -10, color: '#e31837'}} to="/"> Desserter</SidebarLink>
                <SidebarLink whileHover={{  y: -10, color: '#e31837'}} to="/"> Hele menuen</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>

                <SidebarRoute 
                animate={{scale: [1, 1.2, 1, 1],}}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 1],
                    loop: Infinity,
                    repeatDelay: 2
                }}
                to="/">
                Bestil nu!
                </SidebarRoute>

            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
