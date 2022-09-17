import { BgImage } from "gbimage-bridge"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

export const MoBgImage = styled(BgImage)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: 360,
  minWidth: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  [theme.breakpoints.down("md")]: {
    minHeight: 200,
  },
}))

export const MoTypography = styled(Typography)(({ theme }) => ({
  fontSize: "5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))
