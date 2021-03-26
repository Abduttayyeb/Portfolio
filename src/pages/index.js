import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import GoToTop from "../components/GoToTop"

// sections
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Footer from '../sections/Footer'


const ViewHeightDiv = styled.div`
  height: 100vh;
`


const PortfolioIndex = ({data, ...props}) =>{


  function compare( a, b ) {
    if ( a.tier < b.tier ){
      return 1;
    }
    if ( a.tier > b.tier ){
      return -1;
    }
    return 0;
  }

  const siteTitle = data.site.siteMetadata.title;
  console.log(siteTitle);
  const projects = data.allContentfulBlogPost.edges.map(({node}) => {
    if (node.tier)
      return node;
    else
      return node
  }).filter(Boolean).sort(compare);
  // console.log(projects);

  return (
    <Layout location={props.location} title={siteTitle}>
      <GoToTop/>
      <Hero/>
      <ViewHeightDiv id="home"/>
      <Portfolio projects={projects}/>
      <About/>
      <Footer/>
    </Layout>
  )
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost{
      edges{
        node{
          id
          techs
          website
          title
          source
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`