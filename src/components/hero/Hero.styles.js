import { styled } from "@mui/material/styles"
import { Button } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export const MoBgImage = styled(BgImage)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: 480,
  minWidth: "100%",
  [theme.breakpoints.down("md")]: {
    minHeight: 200,
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

  hover: {
    color: "#fff",
    backgroundColor: "#000",
  },
})
