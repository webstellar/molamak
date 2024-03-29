import React, { useEffect } from "react"
import { Box } from "@mui/material"

const SimpleMap = () => {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId")
    const lat = 6.4479382
    const lon = 3.3957034
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
  })

  return (
    <Box sx={{ border: "0" }}>
      <iframe
        title="Molamak Security Services"
        id="iframeId"
        height="250px"
        width="100%"
      ></iframe>
    </Box>
  )
}

export default SimpleMap
