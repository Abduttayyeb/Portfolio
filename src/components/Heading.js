import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	display: inline-block;
	color: ${props => props.color ? `var(--color-${props.color})` : `var(--color-darker)`};
	font-size: 4rem;
	font-weight: var(--bold);
	text-transform: capitalize;
	position: relative;
	line-height: 1.2;

	${props => props.outline ? `
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props.color};
   ` : '' }

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 4.5rem;

	}
	@media ${props => props.theme.mediaQueries.medium}{
	  font-size: 7.2rem;
	}


	&::after{
		content: '';
		position: absolute;
		bottom: 0;
		right: -5px;
		width: 70px;
		height: 4px; 
		background: currentColor;

	 
	 	@media ${props => props.theme.mediaQueries.medium}{
			width: 120px;
			height: 6px; 
		}


	}
`

const Heading = (props) => {
  return (
    <StyledHeading outline={props.outline} color={props.color}>
			{props.children}
    </StyledHeading>
  )
}

export default Heading;