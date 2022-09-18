import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

export const MoTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))
