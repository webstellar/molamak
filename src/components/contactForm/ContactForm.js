import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Typography, Grid, Card, CardContent } from "@mui/material"
import { MoGrid, MoAvatar, MoButton, MoTextField } from "./ContactForm.styles"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyvkonw")
  if (state.succeeded) {
    return <p>Thanks for contacting us, we'll get back to you shortly!</p>
  }
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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <MoTextField
                    fullWidth
                    type="text"
                    name="Firstname"
                    label="Firstname"
                    id="filled-size-normal"
                    variant="filled"
                    autoComplete
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <MoTextField
                    fullWidth
                    type="text"
                    name="Lastname"
                    label="Lastname"
                    id="filled-size-normal"
                    variant="filled"
                    autoComplete
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <MoTextField
                    fullWidth
                    type="email"
                    name="email"
                    label="Email-Address"
                    id="filled-size-normal"
                    variant="filled"
                    autoComplete
                    required
                  />
                  <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <MoTextField
                    fullWidth
                    type="text"
                    name="message"
                    label="Phone"
                    id="filled-size-normal"
                    variant="filled"
                    autoComplete
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <MoTextField
                    type="text"
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    id="filled-size-normal"
                    variant="filled"
                    autoComplete
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Grid>
                <Grid item xs={12} sm={6} justifyItems="flex-end">
                  <MoButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={state.submitting}
                  >
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
