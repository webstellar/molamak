import * as React from "react"
import { MoActive } from "./Navigation.styles"
import { Link, Menu, MenuItem, Button } from "@mui/material"
import Fade from "@mui/material/Fade"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

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
                variant="button"
                underline="none"
                color={menuColor}
                sx={{
                  my: 1,
                  mx: 1.5,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: 16,
                }}
                key={menuItem.id}
                href={menuItem.url}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={menuItem.childItems.nodes.length !== 0 && handleClick}
                endIcon={
                  menuItem.childItems.nodes.length !== 0 && (
                    <KeyboardArrowDownIcon />
                  )
                }
              >
                {menuItem.label}
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
                        href={childItem.url}
                        underline="none"
                        color={menuColor}
                        sx={{
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
