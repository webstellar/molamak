import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"
import "./index.css"
import Hero from "../components/hero/Hero"
import SolutionGrid from "../components/Solution/SolutionGrid"
import { MoReinforcementButton } from "../components/hero/Hero.styles"

import { Container, Grid, Stack } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
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
  </Layout>
)

export default IndexPage
