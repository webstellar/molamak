import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import { GatsbyImage } from "gatsby-plugin-image"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 6, 5),
}))

const TeamTemplate = ({ data }) => {
  return (
    <Layout>
      {data.team.featuredImage ? (
        <PageHero
          img={
            data.team?.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          pageTitle={data.team.title}
        />
      ) : null}
      <Breadcrumb current={data.team} />
      <Wrapper>
        <GatsbyImage
          image={
            data.team.teamProfile?.teamImage?.localFile.childImageSharp
              .gatsbyImageData
          }
          alt={data.team.title}
          style={{
            maxWidth: "100%",
            height: "50%",
            objectFit: "none",
            objectPosition: "center top",
          }}
        />
      </Wrapper>
      <Wrapper
        maxWidth="lg"
        dangerouslySetInnerHTML={{ __html: data.team.content }}
      />
    </Layout>
  )
}

export default TeamTemplate

export const teamQuery = graphql`
  query ($id: String!) {
    team: wpTeam(id: { eq: $id }) {
      title
      uri
      content
      teamProfile {
        teamImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 1920
                height: 1080
                formats: [AUTO, WEBP]
                webpOptions: { quality: 80 }
                placeholder: BLURRED
              )
            }
          }
        }
      }
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
    }
  }
`
