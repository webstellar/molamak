import { styled } from "@mui/material/styles"
import { Grid, Button, Paper } from "@mui/material"
import { BgImage } from "gbimage-bridge"

export const MoStatementButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: 0,
  color: "#000",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}))

export const MoBgImage = styled(BgImage)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: "100%",
  minHeight: 600,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  [theme.breakpoints.down("md")]: {
    minHeight: 200,
  },
}))

export const MoPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}))

export const MoGrid = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  paddingLeft: "5rem",
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
  },
}))

export const MoInnerGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4, 4, 4, 4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 2, 2, 2),
  },
}))
