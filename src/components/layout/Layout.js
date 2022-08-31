/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import "./../../styles/global.css"

import { createTheme, colors, ThemeProvider } from "@mui/material"

import Header from "../header/Header"
import Secondaryheader from "../header/Secondaryheader"
import Footer from "../footer/Footer"

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.indigo[900],
      sub: colors.grey[400],
      white: colors.grey[50],
    },
  },
})

const Layout = ({ children }) => {
  const data = useMenuQuery()

  return (
    <ThemeProvider theme={theme}>
      <Secondaryheader
        siteTitle={data.site.siteMetadata?.description || `Description`}
      />
      <Header siteMenu={data.wpMenu || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
