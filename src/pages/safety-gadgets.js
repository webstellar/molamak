import React from "react"
import Layout from "./../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import { useSafetyQuery } from "../hooks/useSafetyQuery"
import Lottie from "react-lottie"
import * as comingsoon from "../lottie/comingsoon.json"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 0, 5),
}))

const SafetyGadget = () => {
  const data = useSafetyQuery()
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
        <Lottie options={defaultOptions} height={540} width={540} />
      </Layout>
    </>
  )
}

export default SafetyGadget