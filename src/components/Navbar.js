import React, { useState } from 'react';
import styled from 'styled-components';
import  logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";


const Wrapper = styled.div`
	background : var(--color-darker);
	color: var(--color-white);
	width: 100%;
	position: fixed;
	z-index: 4;
`

const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`

const StyledNavbar = styled.div`
	width: 100%;
	padding: 0.8em 3em;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const LogoContainer = styled.div`
	width: 45px;
	cursor: pointer;
	transition: opacity 0.3s ease-in;


	&:hover, &:focus{
		opacity: 0.75;
	}

	img{
		margin-top: 10px;
		width: 100%;
		object-fit: cover;
		object-position: center center;	
	}
`
const MenuButton = styled.div`
	position: relative;
	width: 25px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 6;
	cursor: pointer;
`
const MenuButtonBurger = styled.div`
	&,&::after, &::before{
		width: 100%;
		height: 1px;
		background: var(--color-white);
		transition: all .3s ease;
	}

	&::after, &::before{
		position: absolute;
		content:'';
	}
	
	&{background: ${props => props.isNavOpen ? 'transparent' : ''};}

	&::before{
		transform: translateY(-8px);
		transform: ${props => props.isNavOpen ? 'rotate(45deg)' : ''};
	}
	&::after{
		transform: translateY(8px);
		transform: ${props => props.isNavOpen ? 'rotate(-45deg)' : ''};
	}

	@media ${props => props.theme.mediaQueries.small}{
	  display: none;
	}

`

const Navigation = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: var(--color-darker);
	z-index: 5;
	transition: all 0.4s ease;
	opacity: ${props => props.isNavOpen ? 1 : 0};
	transform: ${props => props.isNavOpen ? 'translateY(0)' : 'translateY(-100%)'};

	display: flex;
	align-items: center;

	@media ${props => props.theme.mediaQueries.small}{
	  position: static;
		background: transparent;
	  flex-basis: 30%;
	  height: 100%; 
	  transform: translateY(0);
	  opacity: 1;
	  justify-content: space-between;
	}
`

const NavList = styled.ul`
	width: 100%;
 	display: flex;
 	flex-flow: column nowrap;
	align-items: center;	
	list-style: none;
	opacity: ${props => props.isNavOpen ? 1 : 0};
	transition:  ${props => props.isNavOpen ? 'opacity 0.3s 0.35s ease' : ''}; 

	@media ${props => props.theme.mediaQueries.small}{
	  opacity: 1;
	  flex-direction: row;
	  justify-content: flex-end;
	}
`
const NavLink = styled.li`
	&:not(:last-child){
		margin-bottom: 2rem;
		
		@media ${props => props.theme.mediaQueries.small}{
			margin-bottom: 0;
			margin-right: 3rem;
		}
	}

	a{
		font-size: 2.4rem;
		padding: 0.1em 0.3em;
		text-decoration: none;
		color: var(--color-white);
		font-weight: var(--bold);
		text-transform: uppercase;

		@media ${props => props.theme.mediaQueries.small}{
			font-size: 1.3rem;
			cursor: pointer;
			transition: color 0.3s ease-in;

			&:hover, &:focus{
				color: var(--color-blue-lg);
			}
		}
	}

	@media ${props => props.theme.mediaQueries.small}{
		&:first-child{
			display: none;
		}
	}

`
const ContactList = styled.ul`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 8%;
	transform: ${props => props.isNavOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: ${props => props.isNavOpen ? 'transform 0.5s 0.35s cubic-bezier(0.6,-0.08, 0.44, 1.52)' : ''};
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;

	@media ${props => props.theme.mediaQueries.small}{
	  display: none;
	}
`

const ListItem = styled.li`
	padding: 0.3em;
	font-size: 1.8rem;
	line-height: 1;

	a{
		color: var(--color-white);
		font-size: 2.4rem;
		text-decoration: none;
	}

	&:not(:last-child){
		margin-right: 1rem;
	}
`

const Navbar = (props) => {
	const [isNavOpen, setIsNavOpen] = useState(false); 

	const toggleNav = () =>{
		if (window.innerWidth >= 600 ) return;

		!isNavOpen ? 
			document.body.style.overflow = 'hidden' 
			:
		 document.body.style.overflow = 'visible';
		setIsNavOpen(!isNavOpen) 
	}

  return (
  	<Wrapper>
  		<Container>  			
				<StyledNavbar>
					<LogoContainer>
						<Link 
		  				to="home"
					   	spy={true}
					   	smooth={true}
					   	duration= {1000}
		  			> 
						  <img src={logo} alt="Abduttayyeb's  logo"/>
						</Link>
					</LogoContainer>

				  <MenuButton onClick={()=> toggleNav()}
				  >
				  	<MenuButtonBurger isNavOpen={isNavOpen}/>
				  </MenuButton>

				  <Navigation isNavOpen={isNavOpen}>
				  	<NavList isNavOpen={isNavOpen}>
				  		<NavLink>
				  			<Link 
				  				onClick={()=> toggleNav()}
				  				to="home"
							   	spy={true}
							   	smooth={true}
							   	duration= {1000}
				  			> 
				  				Home 
				  		  </Link>
				  		</NavLink>
				  		<NavLink>
				  			<Link 
				  				onClick={()=> toggleNav()}
				  				to="portfolio"
							   	spy={true}
							   	offset={-62}
							   	smooth={true}
							   	duration= {1000}
				  			> 
				  				Projects 
				  		  </Link>
				  		</NavLink>
				  		<NavLink>
				  			<Link 
				  				onClick={()=> toggleNav()}
				  				to="about"
							   	spy={true}
							   	offset={-62}
							   	smooth={true}
							   	duration= {1000}
				  			> 
				  				About 
				  		  </Link>
				  		</NavLink>
				  		<NavLink>
				  			<a href="#"> 
				  				Blog
				  		  	</a>
				  		</NavLink>
				  		<NavLink>
				  			<Link 
				  				onClick={()=> toggleNav()}
				  				to="contact"
							   	spy={true}
							   	offset={-62}
							   	smooth={true}
							   	duration= {1000}
				  			> 
				  				Contact 
				  		  </Link>
				  		</NavLink>
				  	</NavList>
				  	<ContactList isNavOpen={isNavOpen}>
				  		<ListItem>
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
				  </Navigation>
				</StyledNavbar>
  		</Container>
  	</Wrapper>
  )
}

export default Navbar;