import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';

const Wrapper = styled.section`
	background: var(--color-darker);
	color: var(--color-white);
  padding: 6em 1.5em; 
  z-index: 2;
  position: relative;

	@media ${props => props.theme.mediaQueries.smaller}{
	  padding: 6em 0;
	}
`

const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media ${props => props.theme.mediaQueries.smaller}{
	  max-width: 450px;
	  margin: 0 auto;
	}

`

const TalkText = styled.p`
	color: var(--color-white);
	font-size: 2.6rem;
	font-weight: var(--medium);
	text-transform: capitalize;
	line-height: 1.2;

	@media ${props => props.theme.mediaQueries.smallest}{
	  font-size: 3rem;
	}

	@media ${props => props.theme.mediaQueries.smaller}{
	  font-size: 3.5rem;
	}

`
const HightLighter = styled.span`
	color: var(--color-light);
	font-weight: var(--bold);
`

const ContactBox = styled.div`
	margin: 7.5rem 0;
`

const Email = styled.a`
	font-size: 2.4rem;
	font-weight: var(--medium);
	color: var(--color-light); 
	text-decoration: none;
	
	@media ${props => props.theme.mediaQueries.smallest}{
	 	font-size: 2.9rem;
	}

	@media ${props => props.theme.mediaQueries.medium}{
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.42, 0, 0.61, 1.16);
		&:hover{
			color: var(--color-blue-lg);	
		}
	}
`

const ContactList = styled.ul`
	margin-top: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
`
const ListItem = styled.li`
	line-height: 1;
	a{
		color: var(--color-white);
		font-size: 3.5rem;
		text-decoration: none;
		padding: 0em 0.2em;
		transition: all 0.3s ease-in;

	}

	&:not(:last-child){
		margin-right: 2rem;
	}

	@media ${props => props.theme.mediaQueries.medium}{
		width: 70px;
		height: 70px;
		background: var(--color-dark);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		outline:none;
		transition: all 0.3s ease-in;
		
		a{
			padding: 0.5em;
			outline: 0;


			&:focus{
				transform: rotateZ(360deg);	
			}
		}

		&:hover, &:focus-within{
			background: ${props => props.color ? `var(--color-${props.color})` : ``};
			border-radius: 0;
		}

		&:hover > a{
			transform: rotateZ(360deg);	
		}
	}

`

const LogoBox = styled.div`
	width: 100px;

	img{
		width: 100%;
	}
`

const Copy = styled.p`
	margin-top: 1rem;
	font-size: 1rem;
	font-weight: var(--bold);
	text-transform: uppercase;

`

const Footer = (props) => {
  return (
  	<Wrapper id="contact">
  		<Container>  			
	  		<TalkText>
	  			let's talk and  build  <HightLighter> something   awesome </HightLighter> together!
	  		</TalkText>
	  		<ContactBox>
	  			<Email href="mailto:absking786@gmail.com">
	  				absking786@gmail.com
	  			</Email>
	  			<ContactList>
	  				<ListItem color="green">
	  					<a 
								href="https://github.com/Abduttayyeb" 
								target="_blank"
								rel="noopener noreferrer"
	  					>
	  						<FontAwesomeIcon icon ={['fab', 'github']}/>
	  					</a>
	  				</ListItem>
	  				<ListItem color="blue">
	  					<a
								href="https://www.linkedin.com/in/abduttayyeb/" 
								target="_blank"
								rel="noopener noreferrer"
	  					>
	  						<FontAwesomeIcon icon ={['fab', 'linkedin']}/>
	  					</a>
	  				</ListItem>
	  				<ListItem color="red">
	  					<a 
								href="https://www.instagram.com/autohish_219/" 
								target="_blank"
								rel="noopener noreferrer"
	  					>
	  						<FontAwesomeIcon icon ={['fab', 'instagram']}/>
	  					</a>
	  				</ListItem>
	  				<ListItem color="cyan">
	  					<a 
								href="https://twitter.com/abtab_m" 
								target="_blank"
								rel="noopener noreferrer"
	  					>
	  						<FontAwesomeIcon icon ={['fab', 'twitter']}/>
	  					</a>
	  				</ListItem>	  				
	  			</ContactList>
	  		</ContactBox>
	  		<LogoBox>
	  			<img src={logo} alt="Abduttayyeb logo"/>
	  		</LogoBox>
	  		<Copy>
	  			copyright &copy; {new Date().getFullYear()}, Abduttayyeb Mazhar 
	  		</Copy>
  		</Container>
  	</Wrapper>
  )
}

export default Footer;