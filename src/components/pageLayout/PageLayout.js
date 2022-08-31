import React from "react"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

import { Wrapper } from "./PageLayout.style"

const PageLayout = ({ data }) => {
  return (
    <>
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
    </>
  )
}

export default PageLayout
