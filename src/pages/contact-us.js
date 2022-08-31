import React from "react"
import Layout from "./../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

import { useContactQuery } from "../hooks/useContactQuery"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 0, 5),
}))

const ContactUs = () => {
  const data = useContactQuery()

  return (
    <>
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
      </Layout>
    </>
  )
}
export default ContactUs
