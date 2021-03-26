import React from 'react';
import styled , { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper =  styled.section`
	width: 100%; 
	padding: 1.45em 1.5em; 
	position: fixed;
	z-index: 1;
	color: var(--color-white);
	background: var(--color-darker);

	@media ${props => props.theme.mediaQueries.small}{
	  padding: 1.45em 3em;
	}
`

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	max-width: 1024px;
	margin: 0 auto;

`

const TextBanner = styled.div`
 display: flex;
 flex-direction: column;

 @media ${props => props.theme.mediaQueries.small}{
   max-width: 420px;
 }
`

const Name = styled.h1`
	font-weight: var(--bold);
	text-transform: capitalize;	
	font-size: 5rem;
	line-height: 0.8;

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 9rem;
	  line-height: 0.9;


`
const Ocupation = styled.p`
	margin-top: 3.5rem;
	text-transform: uppercase;
	font-weight: var(--meidium);
	font-size: 2rem;

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 2.6rem;
	}

`
const HighLight = styled.span`
	background: linear-gradient(to right, var(--color-green) 0%, var(--color-blue) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const ContactList = styled.ul`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;

	@media ${props => props.theme.mediaQueries.small}{
	  height: 20rem;
	  bottom: auto;
	  left: auto;
	  top: 50%;
	  transform: translateY(-50%);
	  flex-direction: column;
	  justify-content: space-around;
	}

`

const ListItem = styled.li`
	padding: 0.3em;
	font-size: 1.8rem;
	line-height: 1;

	a{

		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-white);
		font-size: 2.4rem;
		text-decoration: none;
		outline: none;

	  @media ${props => props.theme.mediaQueries.small}{
	    font-size: 2.8rem;
	  }

		@media ${props => props.theme.mediaQueries.medium}{
			padding: 0.3em 0.7em;
			background-image: linear-gradient(135deg, var(--color-white) 50%, transparent 50%);
	    background-position: -50px -50px;
	    background-size: 0px 50px;
	    background-repeat: no-repeat;	
	    transition: all 0.6s ease-in-out;

	    &:hover, &:focus{
	    	color: var(--color-darker);
  	    background-size: 300% 300%;
  			background-position: 0% 0%;
	    }		
		}

	}

	&:not(:last-child){
		margin-right: 1rem;
	
		@media ${props => props.theme.mediaQueries.small}{
		  margin: 0;
		}
	}
`

const ScrollDownAnimation = keyframes`
	0%{
		transform: translateY(-100%);
	}	
	100%{
	 transform: translateY(100%);
	}
`

const ScrollDownBox = styled.div`
	display: none;
	position: absolute;
	left: 50%;
	bottom: 10%;
	width: 1px;
	height: 60px;

	@media ${props => props.theme.mediaQueries.medium}{
		display: block;
	} 
`

const ScrollDown = styled.div`
	position: relative;
	overflow: hidden;
	width: 1px;
	height: 60px;
	margin-top: 4rem;

	&::before{
		content: '';
		position: absolute;
		background: var(--color-white);
		top: 0;
		bottom: 0;
		width: 100%;
		animation-name: ${ScrollDownAnimation};
		animation-duration: 1.5s;
		animation-timing-function: ease;
		animation-iteration-count: infinite;
		animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
	}
`


const Hero = (props) => {
  return (
  	<Wrapper>
  		<Container>
  			<TextBanner>
					<Name>
						Abduttayyeb Mazhar
					</Name>
					<Ocupation>
						<HighLight>Robotics </HighLight> Machine Learning <HighLight> AI </HighLight>
					</Ocupation>
  			</TextBanner>
  			<ScrollDownBox>
  				<ScrollDown/>
  			</ScrollDownBox>
				<ContactList>
					<ListItem >
						<a href="mailto:absking786@gmail.com">
							<FontAwesomeIcon icon ="envelope"/>
						</a>
					</ListItem>
					<ListItem>
						<a 
							href="https://github.com/abduttayyeb" 
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon ={['fab', 'github']}/>
						</a>
					</ListItem>
					<ListItem>
						<a 
							href="https://www.linkedin.com/in/abduttayyeb/" 
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon ={['fab', 'linkedin']}/>
						</a>
					</ListItem>
					<ListItem>
						<a
							href="https://www.instagram.com/autohish_219/" 
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon ={['fab', 'instagram']}/>
						</a>
					</ListItem>
				</ContactList>
  		</Container>
  	</Wrapper>
  )
}

export default Hero;	