import React from "react"
import { Typography, Grid, Card, CardContent } from "@mui/material"
import { MoGrid, MoAvatar, MoButton, MoTextField } from "./ContactForm.styles"

const ContactForm = () => {
  return (
    <div>
      <MoAvatar>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          ?
        </Typography>
      </MoAvatar>

      <MoGrid>
        <Card
          sx={{
            maxWidth: 500,
            margin: "0 auto",
            backgroundColor: "#c4c4c4",
            boxShadow: 0,
          }}
        >
          <CardContent>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <MoTextField
                    label="Firstname"
                    id="filled-size-normal"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MoTextField
                    label="Lastname"
                    id="filled-size-normal"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MoTextField
                    label="Email-Address"
                    id="filled-size-normal"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MoTextField
                    label="Phone"
                    id="filled-size-normal"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MoTextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    id="filled-size-normal"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6} justifyItems="flex-end">
                  <MoButton type="submit" variant="contained" color="primary">
                    Send
                  </MoButton>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </MoGrid>
    </div>
  )
}

export default ContactForm
