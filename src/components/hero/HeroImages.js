import React from "react"
import { Typography, Paper, CssBaseline, Box } from "@mui/material"
import {
  MoStatementButton,
  MoBgImage,
  MoGrid,
  MoInnerGrid,
} from "./HeroImages.styles"
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const HeroImages = ({ slideText, slideButton, slideImage }) => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down("md"))
  const md = 8
  const dt = 4
  return (
    <>
      <CssBaseline />
      <Paper
        sx={{
          color: "#fff",
        }}
      >
        <MoBgImage
          image={slideImage}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <MoGrid container spacing={2}>
            <MoInnerGrid xs={match ? md : dt} sx={{ border: 2 }}>
              <Typography variant="p" color="inherit" paragraph gutterBottom>
                {slideText}
              </Typography>
              <MoStatementButton
                variant="contained"
                size="large"
                href="/contact-us"
              >
                <Box
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {slideButton}
                </Box>
              </MoStatementButton>
            </MoInnerGrid>
          </MoGrid>
        </MoBgImage>
      </Paper>
    </>
  )
}

export default HeroImages
