import { styled } from "@mui/material/styles"
import { AppBar } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export const MoBgImage = styled(BgImage)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: 600,
  minWidth: "100%",
  [theme.breakpoints.down("md")]: {
    minHeight: 200,
  },
}))

export const MoStyledImg = styled(GatsbyImage)({
  maxHeight: "600px",
})

export const MoLogo = styled(AppBar)(({ theme }) => ({}))
