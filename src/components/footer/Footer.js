import React from "react"
import { useFooterMenuQuery } from "../../hooks/useFooterMenuQuery"
import { MoAppBar, MoStatement, MoStatementButton } from "./Footer.styles"
import { Typography, CssBaseline, Container, Toolbar, Box } from "@mui/material"
import FooterNavigation from "../navigation/FooterNavigation"
import SimpleMap from "../map/SimpleMap"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const Footer = () => {
  const { wpMenu } = useFooterMenuQuery()
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <footer>
      <CssBaseline />
      <MoStatement position="static" elevation={0} color="default">
        <Container maxWidth="xl">
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: match && "1.2rem",
                mb: match && 2,
              }}
            >
              Interested in getting a free consultation by our security experts?
            </Typography>
            <MoStatementButton
              variant="contained"
              color="primary"
              size="large"
              href="/contact-us"
            >
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
      <SimpleMap />
      <MoAppBar
        position="static"
        elevation={0}
        color="default"
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: !match ? "row" : "column",
                justifyContent: !match ? "space-between" : "flex-start",
                alignItems: !match ? "flex-end" : "flex-start",
                pt: !match ? undefined : 2,
                pb: !match ? undefined : 2,
              }}
            >
              <FooterNavigation
                menu={wpMenu.menuItems?.nodes}
                menuColor="common.white"
              />
              <Typography
                Typography
                variant="p"
                color="common.white"
                sm={12}
                sx={{ mt: match ? 5 : undefined }}
              >
                ©{new Date().getFullYear()} &middot; All Rights Reserved.
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </MoAppBar>
    </footer>
  )
}

export default Footer
