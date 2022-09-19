import React from "react"
import PropTypes from "prop-types"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import "./../../styles/global.css"
import CookieConsent from "react-cookie-consent"

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
        <CookieConsent
          location="bottom"
          buttonText="I understand"
          declineButtonText="I decline"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
