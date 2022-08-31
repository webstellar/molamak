import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import OurHistory from "../components/ourHistory/OurHistory"
import OurTeam from "../components/ourTeam/OurTeam"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 0, 5),
}))

const PageTemplate = ({ data }) => (
  <Layout>
    {data.wpPage.featuredImage ? (
      <PageHero
        img={
          data.wpPage?.featuredImage?.node?.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        pageTitle={data.wpPage.title}
      />
    ) : null}
    <Breadcrumb current={data.wpPage} />
    <Wrapper
      maxWidth="lg"
      dangerouslySetInnerHTML={{ __html: data.wpPage.content }}
    />

    {data.wpPage?.aboutusFieldGroup ? (
      <>
        <Wrapper maxWidth="lg">
          <OurHistory ourHistory={data.wpPage?.aboutusFieldGroup?.ourHistory} />
        </Wrapper>
        <Wrapper maxWidth="lg">
          <OurTeam ourTeam={data.wpPage?.aboutusFieldGroup?.ourTeam} />
        </Wrapper>
      </>
    ) : undefined}
  </Layout>
)

export default PageTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      aboutusFieldGroup {
        title
        ourHistory {
          historyText
          keyArea
          year
        }
        ourTeam {
          teamName
          teamShortDescription
          teamPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                  webpOptions: { quality: 100 }
                  quality: 100
                )
              }
            }
          }
        }
      }

      contactusFieldGroup {
        title
        generalQuestions {
          frequentlyAskedQuestion
          answer
        }
      }

      solutionsFieldGroup {
        title
        solutions {
          solutionName
          solutionDescription
          solutionFeaturedImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                  webpOptions: { quality: 100 }
                  quality: 100
                )
              }
            }
          }
        }
      }

      content
      title
      uri
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                formats: [AUTO, WEBP]
                placeholder: BLURRED
                webpOptions: { quality: 100 }
                quality: 100
              )
            }
          }
        }
      }
    }
  }
`
