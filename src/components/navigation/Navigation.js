import * as React from "react"
import { MoActive } from "./Navigation.styles"
import { Menu, MenuItem, Button } from "@mui/material"
import Fade from "@mui/material/Fade"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Link } from "gatsby"

const Navigation = ({ menu, menuColor }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <MoActive>
        {menu.map(menuItem =>
          !menuItem.parentId ? (
            <>
              {/* Pending fix on the button and hover*/}
              <Button
                key={menuItem.id}
                variant="button"
                underline="none"
                color={menuColor}
                sx={{
                  my: 1,
                  mx: 1,
                  textTransform: "uppercase",
                  fontSize: 16,
                }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseOver={
                  menuItem.childItems.nodes.length !== 0
                    ? handleClick
                    : undefined
                }
                endIcon={
                  menuItem.childItems.nodes.length !== 0 && (
                    <KeyboardArrowDownIcon />
                  )
                }
              >
                <Link
                  to={menuItem.uri}
                  style={{
                    color: `${menuColor}`,
                    textDecoration: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {menuItem.label}
                </Link>
              </Button>

              {menuItem.childItems.nodes.length !== 0 ? (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  TransitionComponent={Fade}
                >
                  {menuItem.childItems.nodes.map(childItem => (
                    <MenuItem key={childItem.id} onClick={handleClose}>
                      <Link
                        to={childItem.uri}
                        style={{
                          color: `${menuColor}`,
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        {childItem.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              ) : null}
            </>
          ) : null
        )}
      </MoActive>
    </>
  )
}

export default Navigation
