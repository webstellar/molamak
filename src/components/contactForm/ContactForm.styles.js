import { styled } from "@mui/material/styles"
import { Box as Grid, Avatar, TextField, Button } from "@mui/material"

export const MoGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10),
  backgroundColor: "#c4c4c4",
  borderRadius: 15,
  marginLeft: "3rem",
}))

export const MoAvatar = styled(Avatar)(({ theme }) => ({
  marginBottom: "-3rem",
  width: 120,
  height: 120, 
  backgroundColor: theme.palette.secondary.main,
  color: "grey.50",
}))

export const MoTextField = styled(TextField)({
  backgroundColor: "#fff",
})

export const MoButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 0,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}))
