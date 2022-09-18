import { styled } from "@mui/material/styles"
import { Button, Container } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export const MoBgImage = styled(BgImage)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: 480,
  minWidth: "100%",
  backgroundRepeat: "no-repeat",
  backgroundposition: "center",
  [theme.breakpoints.down("md")]: {
    minHeight: 400,
  },
}))

export const MoStyledImg = styled(GatsbyImage)({
  maxHeight: "600px",
})

export const MoReinforcementButton = styled(Button)({
  backgroundColor: "#fff",
  borderRadius: 0,
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "#000",

  "&:hover": {
    color: "#fff",
    backgroundColor: "#000",
  },
})

export const MoHomeContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 8, 6),
  },
}))
