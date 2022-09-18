import React from "react"
import Layout from "./../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import OurHistory from "../components/ourHistory/OurHistory"
import OurTeam from "../components/ourTeam/OurTeam"
import { useAboutQuery } from "../hooks/useAboutQuery"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 6, 5),
}))

const AboutUs = () => {
  const data = useAboutQuery()

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

        {data.wpPage.aboutusFieldGroup ? (
          <>
            <Wrapper maxWidth="lg">
              <OurHistory
                ourHistory={data.wpPage?.aboutusFieldGroup?.ourHistory}
              />
            </Wrapper>
            <Wrapper maxWidth="lg">
              <OurTeam ourTeam={data.wpPage?.aboutusFieldGroup?.ourTeam} />
            </Wrapper>
          </>
        ) : undefined}
      </Layout>
    </>
  )
}
export default AboutUs
