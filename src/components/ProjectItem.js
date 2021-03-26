import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"

// Components
import  ButtonLink from './ButtonLink';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
		

	&:not(:last-child){
		margin-bottom: 8rem;
	}

 @media ${props => props.theme.mediaQueries.medium}{
    flex: 0 0 45%;
		padding: 8rem 0;

    &:not(:last-child){
			margin-bottom: 0;
		}
  }

`;

const Header = styled.header`
	position: relative;
	width: 100%;
	height: 50px;
	h1{
		position: absolute;
		font-size: 2.4rem;
		font-weight: var(--bold);
		text-transform: capitalize;
		left: 16px;

	  @media ${props => props.theme.mediaQueries.small}{
	    font-size: 2.8rem;
	    left: 20px;
	  }

	  @media ${props => props.theme.mediaQueries.medium}{
	    left: -16px;
	  }
	}
`;

// const DescriptionText = styled.div`
// 	flex: 1 0 auto;
// 	p{
// 		font-size: 1.4rem;
// 		padding: 0.8em  1em;
// 		font-weight: var(--light);
// 		color: var(--color-light);

// 		@media ${props => props.theme.mediaQueries.small}{
// 		  font-size: 1.6rem;
// 		}
// 	}
// `
const TechsWrapper = styled.div`
	display: flex;
	padding: 0.8em  1em;

`

const Tech = styled.p`
	font-size: 1.3rem;
	text-transform: uppercase;
	font-weight: var(--light);

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 1.6rem;
	}

	span{
		margin: 0 5px;
		color: var(--color-blue-lg);
	}
`

const Footer = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	max-width: 400px;
	display: flex;
	justify-content: space-between;
	padding:0 4em;
	margin-top: 2rem;
	
`;

const Image = styled(Img)`
	width: 100%;
	min-height: 200px;
	object-fit: cover;
	object-position: center center;
`

const ProjectItem = ({project}) => {

	const techs = project.techs;
	// console.log(techs);

  return (
    <Wrapper>
  		<Header>
  			<h1>
  				{project.title}
  			</h1>
  		</Header>
			<a 
				href={project.website}
				target="_blank"
				rel="noopener noreferrer">
				<Image  fluid={project.image.fluid} />  
			</a>
			<TechsWrapper>
				{
					techs.map( (tech, i) => {
						const key = project.id + i;
						 return i >= techs.length - 1 ?
						  <Tech key={key}>{tech}</Tech>
						 : <Tech key={key}>{tech} <span>/</span> </Tech>
					})
				}
			</TechsWrapper>
			<Footer>

				<ButtonLink href={project.website} color ="blue-lg" icon="link">
					demo
				</ButtonLink>
				<ButtonLink  href={project.source} color ="white" icon="code">
					code
				</ButtonLink>
			</Footer>
    </Wrapper>
  )
}

export default ProjectItem;


			// <DescriptionText 
			// 	dangerouslySetInnerHTML={{
   //        __html: project.description.childMarkdownRemark.html,
   //      }}
   //    >
			// </DescriptionText>