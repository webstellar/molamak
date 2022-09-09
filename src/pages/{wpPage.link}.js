import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Lottie from "react-lottie"
import * as comingsoon from "../lottie/comingsoon.json"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 0, 5),
}))

const PageTemplate = ({ data }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: comingsoon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <>
      <Layout>
        {data.page.featuredImage ? (
          <PageHero
            img={
              data.page?.featuredImage?.node?.localFile?.childImageSharp
                ?.gatsbyImageData
            }
            pageTitle={data.page.title}
          />
        ) : null}
        <Breadcrumb current={data.page} />
        <Wrapper
          maxWidth="lg"
          dangerouslySetInnerHTML={{ __html: data.page.content }}
        />

        <Lottie options={defaultOptions} height={540} width={540} />
      </Layout>
    </>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    page: wpPage(id: { eq: $id }) {
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
                quality: 100
                webpOptions: { quality: 100 }
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
