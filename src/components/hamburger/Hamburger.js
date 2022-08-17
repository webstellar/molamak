import React from "react"
import { HamburgerIcon } from "./Hamburger.styles"
import MenuIcon from "@mui/icons-material/Menu"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerIcon onClick={handleOverlayMenu}>
    <MenuIcon />
  </HamburgerIcon>
)

export default Hamburger
