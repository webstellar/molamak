import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/Seo"
import "./index.css"
import Hero from "../components/hero/Hero"

import { Typography, CssBaseline, Container, Toolbar, Box } from "@mui/material"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
