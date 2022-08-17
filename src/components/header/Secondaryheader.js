import React from "react"
import PropTypes from "prop-types"
import {
  Typography,
  Box,
  CssBaseline,
  Container,
  Toolbar,
  Link,
} from "@mui/material"

import {
  MoAppBar,
  MoLocationOnIcon,
  MoLocalPhoneIcon,
  MoAlternateEmailIcon,
} from "./Secondaryheader.styles"

//import { Link } from "gatsby"

const Secondaryheader = ({ siteTitle }) => {
  return (
    <header>
      <CssBaseline />
      <MoAppBar
        position="static"
        elevation={0}
        color="default"
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography variant="p" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              <Box sx={{ textTransform: "uppercase" }}>{siteTitle}</Box>
            </Typography>
            <nav>
              <Link
                underline="none"
                color="inherit"
                to="/"
                sx={{ my: 1, mx: 1.5 }}
              >
                <MoLocationOnIcon fontSize="small" />
                8th Floor, Western House, 8/10, Broad St, Lagos Island
              </Link>
              <Link
                underline="none"
                color="text.primary"
                to="/"
                sx={{ my: 1, mx: 1.5 }}
              >
                <MoLocalPhoneIcon fontSize="small" />
                +234 812 488 8265
              </Link>
              <Link
                underline="none"
                color="text.primary"
                to="/"
                sx={{ my: 1, mx: 1.5 }}
              >
                <MoAlternateEmailIcon fontSize="small" />
                info@molamaksecurityservices.com
              </Link>
            </nav>
          </Toolbar>
        </Container>
      </MoAppBar>
    </header>
  )
}

Secondaryheader.propTypes = {
  siteTitle: PropTypes.string,
}

Secondaryheader.defaultProps = {
  siteTitle: ``,
}

export default Secondaryheader
