import React  from 'react';
import styled from 'styled-components';

// Components
import Heading from '../components/Heading';
import ProjectItem from '../components/ProjectItem';


const  Wrapper = styled.section`
  padding: 6em 0;
	background: var(--color-dark);
	color: var(--color-white);
	z-index: 2;
	position: relative;

 @media ${props => props.theme.mediaQueries.smallest}{
   padding: 6em 1.5em;
 }

	@media ${props => props.theme.mediaQueries.small}{
	  padding: 6em 3em;
	}

	@media ${props => props.theme.mediaQueries.medium}{
	  padding: 12em 3em;
	}
`

const HeadingWrapper = styled.div`
	padding: 0 1.5em;
	max-width: 1024px;
	margin: 0 auto;
	
	@media ${props => props.theme.mediaQueries.smallest}{
	  padding: 0;
	}
	@media ${props => props.theme.mediaQueries.smallest}{
	  margin-bottom: 6rem;
	}
`

const ProjectsWrapper = styled.div`
	max-width: 1024px;
	margin: 6rem auto 0 auto;
	
	@media ${props => props.theme.mediaQueries.medium}{
	  display: flex;
	  flex-flow: row wrap;
	  justify-content: space-between;
	  margin: -8rem auto;
	}
`

const ProjectList = (props) => {	
  return (
  	<Wrapper id="portfolio">
  		<HeadingWrapper>
				<Heading outline color="light">
					Projects
				</Heading>
  		</HeadingWrapper>
		 <ProjectsWrapper>
			{
				props.projects.map(project => (
					<ProjectItem project={project} key={project.id} />
				))
			}
		 </ProjectsWrapper>
  	</Wrapper>
  )
}

export default ProjectList;
