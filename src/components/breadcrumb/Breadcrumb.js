import React from "react"
import { MoBreadcrumbs, MoLink, MoArrow } from "./Breadcrumb.style"
import {Typography } from "@mui/material"

const Breadcrumb = ({ current }) => {
  return (
    <>
      <MoBreadcrumbs
        aria-label="breadcrumb"
        separator={<MoArrow />}
      >
        <MoLink to="/">Home</MoLink>
        <Typography color="grey">{current.title}</Typography>
      </MoBreadcrumbs>
    </>
  )
}

export default Breadcrumb
