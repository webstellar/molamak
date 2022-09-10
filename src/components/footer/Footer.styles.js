import { styled } from "@mui/material/styles"
import { AppBar, Button } from "@mui/material"

export const MoAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(2, 0, 2),
}))

export const MoStatement = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2),
}))

export const MoStatementButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 0,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}))
