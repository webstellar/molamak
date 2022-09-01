import { styled } from "@mui/material/styles"
import { Box, Avatar, TextField } from "@mui/material"

export const MoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10),
  backgroundColor: "#c4c4c4",
  borderRadius: 15,
  marginLeft: "3rem",
}))

export const MoAvatar = styled(Avatar)(({ theme }) => ({
  marginBottom: "-3rem",
  width: 120,
  height: 120,
  width: 95,
  height: 95,
  backgroundColor: theme.palette.secondary.main,
  color: "grey.50",
}))

export const MoTextField = styled(TextField)({
  border: 0,
  borderRadius: 0,
  backgroundColor: "#fff",
})
