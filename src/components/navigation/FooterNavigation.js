import React from "react"
import { MoLink } from "./FooterNavigation.styles"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const Navigation = ({ menu, menuColor }) => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down("md"))

  const mobileDisplay = {
    display: "block",
    py: 1,
  }

  return (
    <>
      <nav>
        {menu.map(menuItem =>
          !menuItem.parentId ? (
            <MoLink
              underline="none"
              color={menuColor}
              key={menuItem.id}
              href={menuItem.url}
              sx={match && mobileDisplay}
            >
              {menuItem.label}
            </MoLink>
          ) : null
        )}
      </nav>
    </>
  )
}

export default Navigation
