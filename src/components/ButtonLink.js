import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.a.attrs({ target: '_blank' })`
	overflow: hidden;
	text-align: center;
	position: relative;
	font-size: 1.2rem;
	font-weight: var(--bold);
	padding: 0.5em 1em;	
	text-transform: uppercase;
	letter-spacing: 1px;
	text-decoration: none;
	outline: none;


	${props => `
		border: 1px solid var(--color-${props.color});
		color: var(--color-${props.color});
		background-image: linear-gradient(135deg, var(--color-${props.color}) 50%, transparent 50%);
	  background-position: -50px -50px;
	  background-size: 0px 50px;
	  background-repeat: no-repeat;

	  &:hover, &:focus{
	  	color: ${props.color !== 'white' ? `var(--color-white)` : `var(--color-darker)` };
	    background-size: 300% 300%;
			background-position: 0% 0%;
	  }
	`}

	

	transition: all 0.5s ease-in-out;

	display: flex;
	align-items: center;

	span{
		margin-left: ${({icon}) => icon ? `0.5rem` : ``}
	}

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 1.4rem;
	}

`
const ButtonLink = ({color, icon, children, ...props}) => {
  return (
    <StyledButton {...props} color={color} icon={icon}>
			<FontAwesomeIcon icon={icon}/>
    	<span>
    		{children}	
    	</span>
    </StyledButton>
  )
}

export default ButtonLink;