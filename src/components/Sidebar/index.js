import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink, SideBtnWrap,SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon ></CloseIcon>
           </Icon>
           <SidebarMenu>
               <SidebarLink to='/'>Pizzaaaas</SidebarLink>
               <SidebarLink to='/'>Sobremesas</SidebarLink>
               <SidebarLink to='/'>Menu Completo</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to='/'>Peça agora!</SidebarRoute>
           </SideBtnWrap>
       </SidebarContainer>
    )
}

export default Sidebar
