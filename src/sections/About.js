import React from 'react';
import styled from 'styled-components';

// components
import Heading from '../components/Heading';
import StackList from '../components/StackList';

const Wrapper = styled.section`
	background: var(--color-white);
	color: var(--color-darker);
  padding: 6em 1.5em;
  z-index: 2;
  position: relative;

	@media ${props => props.theme.mediaQueries.smaller}{
	  padding: 6em 2.5em;
	}

	@media ${props => props.theme.mediaQueries.small}{
	  padding: 6em 3em;
	}

`
const AboutWrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;

`
const StackWrapper = styled.div`
 margin: 0 auto;
 max-width: 1024px;
 margin-top: 6rem;

`
const TextContainer = styled.div`
	margin-top: 2rem;	

	@media ${props => props.theme.mediaQueries.small}{
	  margin-left: 4rem;
	  margin-right: 4rem;
	}

	@media ${props => props.theme.mediaQueries.medium}{
		margin-top: 6rem;
	  margin-left: 9rem;
	  margin-right: 9rem;
	}

`
const Paragraph = styled.p`
	font-size: 1.7rem;
	font-weight: var(--regular);
	line-height: 1.4;
	&:not(:last-child){
		margin-bottom: 2rem; 
	
		@media ${props => props.theme.mediaQueries.small}{
		  margin-bottom: 2.2rem;
		  line-height: 1.5; 
		}

	}

	@media ${props => props.theme.mediaQueries.small}{
	 font-size: 2.1rem;
	}

`
const StackTextContainer = styled.div`
	margin-top: 1.5rem;
	@media ${props => props.theme.mediaQueries.small}{
	  margin-left: 4rem;
	  margin-right: 4rem;
	}

	@media ${props => props.theme.mediaQueries.medium}{
		margin-top: 6rem;
	  margin-left: 8rem;
	  margin-right: 8rem;
	}
`
const HightLighter = styled.span`
	font-weight: var(--bold);
	text-decoration: underline;
`

// const getYearsOld = (dob) => {
// 	 const diff_ms = Date.now() - dob.getTime();
//    const age_dt = new Date(diff_ms); 
//    return Math.abs(age_dt.getUTCFullYear() - 1970);
// }


const About = (props) => {

  return (
  	<Wrapper id="about">
	  	<AboutWrapper>
	  		<Heading>
	  			about
	  		</Heading>
	  		<TextContainer>
					<Paragraph>
						Hi there, my name is Abduttayyeb Mazhar Rampurawala, a <HightLighter> Machine learning Developer</HightLighter> and Computer Science student from India.
					</Paragraph>	
					<Paragraph>
						I am deeply fascinated by the advancements in <HightLighter> Robotics</HightLighter> and AI. I generally brainstorm possible ways to encounter a problem
						and try to go in depth looking for details, building great relationships and <HightLighter> Networking</HightLighter> with people is my forte.						
					</Paragraph>	
					<Paragraph>
						Apart from coding i love <HightLighter> Public Speaking</HightLighter> , pitching my ideas to friends and building great teams. My hobbies include Swimming, Travelling and Reading Ofcourse. 😉
					</Paragraph>
	  		</TextContainer>			
	  	</AboutWrapper>
	  	<StackWrapper>
	  		<Heading>
	  			stack
	  		</Heading>
	  		<StackTextContainer>
					<Paragraph >
						These are some of the tecnologies and languages that I have used in my projects
					</Paragraph>
	  		</StackTextContainer>
				<StackList />
	  	</StackWrapper>
  	</Wrapper>
  )
}

export default About;