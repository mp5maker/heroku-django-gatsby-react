import React from "react"

import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import BlogDetails from '../components/blog-details/blog-details'

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <StaticQuery
      query={blogPage}
      render={(data) => {
        return data.allMarkdownRemark.edges.map((perEdge, index) => {
          const { frontmatter } = perEdge.node
          return (
            <div key={index} className="mb-3">
              <BlogDetails {...frontmatter} />
            </div>
          )
        })
      }}
    />
  </Layout>
)

const blogPage = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }
`

export default IndexPage
