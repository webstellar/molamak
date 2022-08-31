import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Gallery from "../components/gallery/Gallery"
import Masonry from "@mui/lab/Masonry"
import { GatsbyImage } from "gatsby-plugin-image"

import { styled } from "@mui/material/styles"
import { Container, Box } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 0, 5),
}))

const SolutionTemplate = ({ data }) => {
  return (
    <Layout>
      {data.solution.featuredImage ? (
        <PageHero
          img={
            data.solution?.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          pageTitle={data.solution.title}
        />
      ) : null}
      <Breadcrumb current={data.solution} />
      <Wrapper
        maxWidth="lg"
        dangerouslySetInnerHTML={{ __html: data.solution.content }}
      />

      <Wrapper maxWidth="lg">
        <Gallery itemData={data.solution?.solutions?.gallery} />
      </Wrapper>
    </Layout>
  )
}

export default SolutionTemplate

export const solutionQuery = graphql`
  query ($id: String!) {
    solution: wpSolution(id: { eq: $id }) {
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
