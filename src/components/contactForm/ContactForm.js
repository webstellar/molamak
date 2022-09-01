import React from "react"
import { CssBaseline, TextField, Typography, Button, Grid } from "@mui/material"
import { MoBox, MoAvatar } from "./ContactForm.styles"

const ContactForm = () => {
  return (
    <div>
      <MoAvatar>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          ?
        </Typography>
      </MoAvatar>
      <CssBaseline />
      <MoBox
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, backgroundColor: "#fff" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              label="Firstname"
              id="filled-size-normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              label="Lastname"
              id="filled-size-normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              label="Email Address"
              id="filled-size-normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              label="Phone  Number"
              id="filled-size-normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              id="filled-size-normal"
              variant="filled"
            />
          </Grid>
          <Button type="submit" variant="contained" sx={{ borderRadius: 0 }}>
            Send
          </Button>
        </Grid>
      </MoBox>
    </div>
  )
}

export default ContactForm
