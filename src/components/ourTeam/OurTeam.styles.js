import { styled } from "@mui/material/styles"
import { Avatar, Box, Card, Typography } from "@mui/material"

export const MoAvatar = styled(Avatar)({
  zIndex: "10000",
  marginBottom: "-5rem",
  width: 120,
  height: 120,
  backgroundColor: "#fff",
  color: "#000",
  fontWeight: "bold",
})

export const MoBox = styled(Box)({
  marginBottom: "2rem",
})

export const MoDiv = styled("div")({
  marginBottom: "2rem",
})

export const MoCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginLeft: "15%",
}))

export const MoSmallTypography = styled(Typography)({
  marginBottom: "2rem",
  marginLeft: "4rem",
})


export const MoTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))
