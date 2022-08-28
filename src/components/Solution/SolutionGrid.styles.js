import { styled } from "@mui/material/styles"
import { Avatar } from "@mui/material"

export const MoAvatar = styled(Avatar)(({ theme }) => ({
  position: "relative",
  zIndex: "10000",
  marginBottom: "-2rem",
  marginLeft: "1rem",
}))
