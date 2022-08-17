import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/Seo"
import FontStyles from "../styles/Fontstyles"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FontStyles />
    <h1>Let's see if it works</h1>
  </Layout>
)

export default IndexPage
