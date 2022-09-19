import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"
import "./index.css"
import Hero from "../components/hero/Hero"
import SolutionGrid from "../components/Solution/SolutionGrid"
import {
  MoReinforcementButton,
  MoHomeContainer,
} from "../components/hero/Hero.styles"
import homeImg from "../images/molamakhome.jpg"

import { Grid, Stack } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      description="We are one of the longest servicing security firm in Nigeria. We offer core security services to both lives and properties."
      image={homeImg}
    />
    <Hero />
    <MoHomeContainer sx={{ py: 8 }} maxWidth="lg">
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
          href="/our-solutions"
        >
          All Our Solutions
        </MoReinforcementButton>
      </Stack>
    </MoHomeContainer>
  </Layout>
)

export default IndexPage
