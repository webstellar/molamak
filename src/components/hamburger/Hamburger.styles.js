//import styled from "styled-components"
import { styled } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"

export const HamburgerIcon = styled(MenuIcon)(({ theme }) => ({

  display: "block",
  zIndex: "10000",
  right: "30px",
  top: "35px",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  hover: {
    transform: "scale(1.2)",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}))
