// gatsby-ssr.js

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="poppins"
      rel="preload"
      href="/fonts/Poppins-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="poppins"
      rel="preload"
      href="/fonts/Poppins-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}
