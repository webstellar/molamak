import { styled } from "@mui/material/styles"
import { Avatar, Typography } from "@mui/material"

export const MoAvatar = styled(Avatar)(({ theme }) => ({
  marginBottom: "-2rem",
  width: 95,
  height: 95,
  backgroundColor: "#fff",
  color: "#000",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    width: 75,
    height: 75,
  },
}))

export const MoDiv = styled("div")({
  marginBottom: "2rem",
})

export const MoTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

export const MoSmallTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
}))
