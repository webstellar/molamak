import { styled } from "@mui/material/styles"
import { AppBar } from "@mui/material"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"

export const MoAppBar = styled(AppBar)(({ theme }) => ({
  fontSize: "0.85rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

export const MoLocationOnIcon = styled(LocationOnIcon)({
  fontSize: "1rem",
  marginBottom: "-0.3rem",
  marginRight: "0.3rem",
})

export const MoLocalPhoneIcon = styled(LocalPhoneIcon)({
  fontSize: "1rem",
  marginBottom: "-0.3rem",
  marginRight: "0.3rem",
})

export const MoAlternateEmailIcon = styled(AlternateEmailIcon)({
  fontSize: "1rem",
  marginBottom: "-0.3rem",
  marginRight: "0.3rem",
})
