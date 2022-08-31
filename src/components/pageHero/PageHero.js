import React from "react"
import { CssBaseline, Container } from "@mui/material"
import { MoBgImage, MoTypography } from "./PageHero.styles"

const PageHero = ({ img, pageTitle }) => {
  return (
    <>
      <CssBaseline />
      <MoBgImage image={img}>
        <Container maxWidth="xl">
          <MoTypography variant="h1" align="left" color="grey.50" paragraph>
            {pageTitle}
          </MoTypography>
        </Container>
      </MoBgImage>
    </>
  )
}

export default PageHero
