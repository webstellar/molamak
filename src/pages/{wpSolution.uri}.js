import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"

const SolutionTemplate = () => {
  return (
    <Layout>
      <p>Page</p>
    </Layout>
  )
}

export default SolutionTemplate

export const solutionQuery = graphql`
  query ($id: String!) {
    soltuion: wpSolution(id: { eq: $id }) {
      title
      uri
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 1920
                height: 360
                formats: [AUTO, WEBP]
                webpOptions: { quality: 80 }
                placeholder: BLURRED
              )
            }
          }
        }
      }
      solutions {
        title
        gallery {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 1920
                height: 360
                formats: [AUTO, WEBP]
                webpOptions: { quality: 80 }
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
