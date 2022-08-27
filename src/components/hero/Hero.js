import React from "react"
import HeroImages from "./HeroImages"
import { useHomeQuery } from "../../hooks/useHomeQuery"
import { AppBar, Box, Container, Grid, CssBaseline } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { MoStyledImg, BgImage } from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { homepageFieldGroup: data },
  } = useHomeQuery()

  const heroImages = data.slider //array
  const clientLogo = data.clientLogo //array

  return (
    <>
      {/* <MoStyledImg image={imageData} alt="Slide Image" /> */}
      <CssBaseline />
      <Carousel
        IndicatorIcon={false}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        sx={{ width: "100%" }}
      >
        {heroImages.map((image, i) => (
          <HeroImages
            slideButton={image.slideButton}
            slideText={image.slideText}
            slideImage={
              image.slideImage?.localFile?.childImageSharp?.gatsbyImageData
            }
          />
        ))}
      </Carousel>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          {clientLogo.map((logo, i) => (
            <Grid xs={2} key={i}>
              <MoStyledImg
                image={logo?.localFile?.childImageSharp?.gatsbyImageData}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Hero
