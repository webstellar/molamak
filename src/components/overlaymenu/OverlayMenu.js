import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Overlay, MoImg } from "./OverlayMenu.styles"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "gatsby"
import Logo from "../../images/molamak-white.png"

const OverlayMenu = ({ menuOpen, callback }) => {
  const { wpMenu, site } = useMenuQuery()
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <Link to="/">
          <MoImg src={Logo} alt={site.siteMetaData?.title} />
        </Link>
        <nav>
          <List dense={false}>
            {wpMenu.menuItems.nodes.map(item =>
              !item.parentId ? (
                <ListItem disablePadding key={item.id}>
                  <ListItemButton
                    component={Link}
                    to={item.uri}
                    activeClassName="overlayActive"
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ) : null
            )}
          </List>
        </nav>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <CloseIcon />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
