import React from "react"
import HeroImages from "./HeroImages"
import SolutionGrid from "../Solution/SolutionGrid"
import { useHomeQuery } from "../../hooks/useHomeQuery"
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  CssBaseline,
} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { MoStyledImg, MoBgImage, MoReinforcementButton } from "./Hero.styles"

import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const Hero = () => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down("md"))
  const md = 5
  const dt = 2

  const {
    wpPage: { homepageFieldGroup: data },
  } = useHomeQuery()

  const heroImages = data.slider //array
  const clientLogo = data.clientLogo //array
  const reinforcements = data.reinforcementStatement

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
            <Grid xs={12} sm={6} md={2} key={i}>
              <MoStyledImg
                image={logo?.localFile?.childImageSharp?.gatsbyImageData}
                alt="client logo"
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {reinforcements.map((reinforcement, i) => (
        <MoBgImage
          image={
            reinforcement.reinforcementStatementBackground?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          key={i}
        >
          <Container maxWidth="md">
            <Typography variant="p" align="center" color="grey.50" paragraph>
              {reinforcement.reinforcementStatement}
            </Typography>
            <Stack
              sx={{
                pt: 4,
              }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <MoReinforcementButton variant="contained" size="large">
                {reinforcement.reinforcementStatementButton}
              </MoReinforcementButton>
            </Stack>
          </Container>
        </MoBgImage>
      ))}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          <SolutionGrid />
        </Grid>
        <Stack
          sx={{
            pt: 8,
          }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <MoReinforcementButton
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
          >
            All Our Solutions
          </MoReinforcementButton>
        </Stack>
      </Container>
    </>
  )
}

export default Hero
