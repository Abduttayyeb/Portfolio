import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StackListWrapper = styled.ul`
	max-width: 500px;
	margin:0 auto;
	margin-top: 2rem;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	list-style: none;
	height: 320px;


	@media ${props => props.theme.mediaQueries.small}{
		flex-flow: row wrap;
		flex: 0 1 auto;
		max-width: 680px;
		justify-content: center;
		height: 250px;
		width: 100%;
	}

	@media ${props => props.theme.mediaQueries.medium}{
		margin-top: 6rem;
	
	}

`

const StackIcon = styled.li`
	width: 70px;	
	height: 70px;	
	margin-bottom: 10px;
	box-shadow: 2px 3px 3px rgba(0,0,0, 0.1);

	@media ${props => props.theme.mediaQueries.small}{

		flex: 0 0 15%;
		height: auto;
		margin-right: 5%;
		transition: transform 0.15s ease-in;
	  &:hover{
			transform: scale(1.3);
		}
	}

`

const StackList = (props) => {

	const {allFile: icons } = useStaticQuery(graphql`
		query{
		  allFile(filter:{ absolutePath:{regex: "/icons/"}}){
		    edges{
		      node{
		        childImageSharp{
		          fluid{
		            ...GatsbyImageSharpFluid
		          }
		        }
		      }
		    }
		  }
		}
	`)

  return (
   <StackListWrapper>
   	{
   		icons.edges.map(({node}, i) => (
   			<StackIcon key={i}>
   				<Img fluid={node.childImageSharp.fluid}/>
   			</StackIcon>
   		))   			
   	}
   </StackListWrapper>
  )
}

export default StackList;
