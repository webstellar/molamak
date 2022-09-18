import { styled } from "@mui/material/styles"
import { Grid, Breadcrumbs, Container } from "@mui/material"
import { Link } from "gatsby"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export const MoGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: "#000",
  marginTop: "0.8rem",
  display: "flex",
  alignSelf: "center",
  clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
}))

export const MoBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  padding: theme.spacing(3, 3, 3),
  border: "1rem",
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  width: "25%",
  clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}))

export const MoContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2),
  border: "1rem",
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  justifyItems: "flex-start",
  alignItems: "flex-start",
  clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
}))

export const MoLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
})

export const MoArrow = styled(ArrowForwardIosIcon)({
  fontSize: "0.8rem",
})
