import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";


const StyledGoToTop = styled.div`
	position: fixed;
	z-index: 3;
	bottom: 20px;
	right: 15px;
	width: 25px;
	height: 25px;
	background: var(--color-darker);
	border-radius: 50%;
	border: 1px solid var(--color-white);
	display: flex;
	align-items: center;
	justify-content:center;
	font-size: 1rem;
	line-height: 1;

	@media ${props => props.theme.mediaQueries.medium}{
		right: 25px;
	}

`

const GoToTop = (props) => {
  return (
  	<Link 
			to="home"
	   	spy={true}
	   	smooth={true}
	   	duration= {1000}
		> 
			<StyledGoToTop>
		  	<FontAwesomeIcon icon="chevron-up"/>
		  </StyledGoToTop>
		</Link>
  )
}

export default GoToTop;