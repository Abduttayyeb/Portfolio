import React from "react";
import styled, { ThemeProvider }from "styled-components";

import SEO from "../components/seo"

// Styled components theme
import theme from '../utils/theme';
import GlobalStyles from '../utils/globals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars,
  faEnvelope,
  faLink,
  faCode,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Navbar from '../components/Navbar';


const StyledMain = styled.main`
  position: relative;
`

library.add(
  fab,
  faLink,
  faCode,
  faBars,
  faEnvelope,
  faChevronUp,
 );


const Layout = ({children}) => {
   
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Abduttayyeb Mazhar Rampurawala"/>
      <Navbar/>
      <StyledMain>{children}</StyledMain>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default Layout
