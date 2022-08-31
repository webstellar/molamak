import { styled } from "@mui/material/styles"
import { Avatar, Box, Card, Grid } from "@mui/material"

export const MoAvatar = styled(Avatar)(({ theme }) => ({
  marginBottom: "-4rem",
  width: 120,
  height: 120,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
}))

export const MoBox = styled(Box)({
  marginBottom: "2rem",
})

export const MoDiv = styled("div")({
  marginBottom: "2rem",
})

export const MoCard = styled(Card)(({ theme }) => ({
  zIndex: "10000",
  marginLeft: "10%",
}))

export const MoGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
}))
