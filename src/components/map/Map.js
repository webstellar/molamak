import * as React from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { Spinner } from "./Spinner"
import GoogleMap from "./GoogleMap"
import ErrorComponent from "./ErrorComponent"

const render = status => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />
    case Status.FAILURE:
      return <ErrorComponent />
    case Status.SUCCESS:
      return <GoogleMap />
  }
}

const Map = () => {
  const [zoom, setZoom] = React.useState(3) // initial zoom
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  })

  return (
    <div style={{ display: "flex", height: "10%" }}>
      <Wrapper apiKey="AIzaSyBU1y-DdmUcCWbq45yNhl8d1-rtC7Vv-3o" render={render}>
        <GoogleMap
          center={center}
          zoom={zoom}
          style={{ flexGrow: "1", height: "10%" }}
        ></GoogleMap>
      </Wrapper>
    </div>
  )
}

export default Map
