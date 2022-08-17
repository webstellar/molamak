import { styled } from "@mui/material/styles"
import { AppBar } from "@mui/material"
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled"

export const MoAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2, 0, 2),
}))

export const MoImg = styled("img")(({ theme }) => ({
  width: "220px",
  height: "75px",
  [theme.breakpoints.down("md")]: {
    width: "165px",
    height: "57px",
  },
}))

export const MoPhoneIcon = styled(PhoneEnabledIcon)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  paddingRight: "2rem",
  width: "65px",
  height: "65px",
  cursor: "pointer",
}))

{
  /* Link Pending for PhoneIcon */
}
