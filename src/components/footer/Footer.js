import React from "react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { MoAppBar, MoStatement, MoStatementButton } from "./Footer.styles"
import { Typography, CssBaseline, Container, Toolbar, Box } from "@mui/material"
import FooterNavigation from "../navigation/FooterNavigation"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const Footer = () => {
  const { wpMenu } = useMenuQuery()
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down("md"))
  const mt = "12"
  return (
    <footer>
      <CssBaseline />
      <MoStatement position="static" elevation={0} color="default">
        <Container maxWidth="xl">
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              sx={{ flexGrow: 1, fontWeight: "bold", lineHeight: "1.5rem" }}
            >
              Interested in getting a free consultation by our security experts?
            </Typography>
            <MoStatementButton variant="contained" color="primary" size="large">
              <Box
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Free Consultation
              </Box>
            </MoStatementButton>
          </Toolbar>
        </Container>
      </MoStatement>

      <MoAppBar
        position="static"
        elevation={0}
        color="default"
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Box sx={{ flexGrow: 1 }} md={match ? mt : undefined}>
              <FooterNavigation
                menu={wpMenu.menuItems?.nodes}
                menuColor="common.white"
              />
            </Box>
            <Typography variant="p" color="common.white">
              © {new Date().getFullYear()} &middot; All Rights Reserved.
            </Typography>
          </Toolbar>
        </Container>
      </MoAppBar>
    </footer>
  )
}

export default Footer
