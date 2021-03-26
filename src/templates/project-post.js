import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// class ProjectPostTemplate extends React.Component {
//   render() {
//     const post = this.props.data.contentfulBlogPost
//     const siteTitle = this.props.data.site.siteMetadata.title
//     const { previous, next } = this.props.pageContext
//     console.log(post.title)

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title={post.title}
//         />
//         <h1>{post.title}</h1>

//         <nav>
//           <ul
//             style={{
//               display: `flex`,
//               flexWrap: `wrap`,
//               justifyContent: `space-between`,
//               listStyle: `none`,
//               padding: 0,
//             }}
//           >
//             <li>
//               {previous && (
//                 <Link to={previous.slug} rel="prev">
//                   ← {previous.title}
//                 </Link>
//               )}
//             </li>
//             <li>
//               {next && (
//                 <Link to={next.slug} rel="next">
//                   {next.title} →
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </nav>
//       </Layout>
//     )
//   }
// }


class ProjectPostTemplate extends React.Component {
  render() {
    const post = this.props.data.allContentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    // console.log(post.title)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title={post.title}
        />

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}




// const BlogPosts = ({ data }) => {
//   const blogPosts = data.allContentfulBlogPost.edges;
//   return (
//     <Layout>
//       <SEO title="Blog posts" />
//       <h1>{"Here's a list of all blogposts!"}</h1>
//       <div className="blogposts">
//         {blogPosts.map(({ node: post }) => (
//           <div key={post.id}>
//             <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
//           </div>
//         ))}
//         <span className="mgBtm__24" />
//         <Link to="/">Go back to the homepage</Link>
//       </div>
//     </Layout>
//   );
// };


export default ProjectPostTemplate

// export const query = graphql`
//   query BlogPostsPageQuery {
//     allContentfulBlogPost(limit: 1000) {
//       edges {
//         node {
//           id
//           title
//           slug
//           body {
//             body
//           }
//           image {
//             file {
//               url
//             }
//           }
//           tags
//         }
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query ProjectPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     contentfulBlogPost ( slug: { eq: $slug } ){
//       title
//       slug
//       body {
//         body
//       }
//       image {
//         file {
//           url
//         }
//       }
//       tags
//     }
//   }
// `;

export const query = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost ( slug: { eq: $slug } ){
      title
    }
  }
`