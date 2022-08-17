import * as React from "react"
import PropTypes from "prop-types"
import { MoDiv } from "./GoogleMap.styles"

const GoogleMap = ({ center, zoom }) => {
  const ref = React.useRef(null)
  const [map, setMap] = React.useState()

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      )
    }
  }, [ref, map])

  return (
    <>
      <MoDiv ref={ref} id="map" />
    </>
  )
}

export default GoogleMap
