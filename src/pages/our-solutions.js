import React from "react"
import Layout from "./../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import OurSolutions from "../components/Solution/OurSolution"
import Seo from "../components/seo/Seo"

import { useSolutionQuery } from "../hooks/useSolutionQuery"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 6, 5),
}))

const OurSolution = () => {
  const data = useSolutionQuery()

  return (
    <>
      <Layout>
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          image={
            data.wpPage?.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
        />
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
        <Wrapper maxWidth="lg">
          <OurSolutions
            ourSolution={data.wpPage.solutionsFieldGroup.solutions}
          />
        </Wrapper>
      </Layout>
    </>
  )
}
export default OurSolution
