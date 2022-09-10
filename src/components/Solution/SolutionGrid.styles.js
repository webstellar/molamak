import { styled } from "@mui/material/styles"
import { Avatar, Button } from "@mui/material"
import { Link } from "gatsby"

export const MoAvatar = styled(Avatar)(({ theme }) => ({
  position: "relative",
  zIndex: "10000",
  marginBottom: "-2rem",
  marginLeft: "1rem",
}))

export const MoButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: "#fff",
  },
}))

export const MoLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))
