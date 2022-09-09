import React, { useState } from "react"
import Logo from "../../images/molamak@3x.png"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { MoAppBar, MoImg, MoPhoneIcon } from "./Header.styles"
import Navigation from "../navigation/Navigation"
import Hamburger from "../hamburger/Hamburger"
import OverlayMenu from "../overlaymenu/OverlayMenu"
import { Link } from "gatsby"

import { CssBaseline, Container, Toolbar, Box } from "@mui/material"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const { site, wpMenu } = useMenuQuery()
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
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <MoImg src={Logo} alt={site.siteMetaData?.title} />
              </Link>
            </Box>
            <Navigation menu={wpMenu.menuItems?.nodes} menuColor="#000" />
            <MoPhoneIcon fontSize="large" />
            <Hamburger handleOverlayMenu={handleOverlayMenu} />
            <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
          </Toolbar>
        </Container>
      </MoAppBar>
    </header>
  )
}

export default Header
