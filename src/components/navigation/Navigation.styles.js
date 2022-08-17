import { styled } from "@mui/material/styles"

export const MoActive = styled("nav")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))
