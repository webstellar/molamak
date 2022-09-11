import React from "react"
import { FormspreeProvider } from "@formspree/react"
import Layout from "./../components/layout/Layout"
import PageHero from "../components/pageHero/PageHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import ContactForm from "../components/contactForm/ContactForm"
import Faq from "../components/faq/Faq"

import { useContactQuery } from "../hooks/useContactQuery"

import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 0, 5),
}))

const ContactUs = () => {
  const data = useContactQuery()

  return (
    <FormspreeProvider project="">
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
        <Wrapper maxWidth="lg">
          <ContactForm />
        </Wrapper>
        <Wrapper maxWidth="lg">
          <Faq questions={data.wpPage.contactusFieldGroup.generalQuestions} />
        </Wrapper>
      </Layout>
    </FormspreeProvider>
  )
}
export default ContactUs
