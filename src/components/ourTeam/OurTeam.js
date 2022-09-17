import React from "react"
import { MoAvatar, MoCard, MoTypography } from "./OurTeam.styles"
import { Typography, CardContent, Grid } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const OurTeam = ({ ourTeam }) => {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom={true}
        align="left"
        sx={{ fontWeight: "Bold" }}
      >
        Our Team
      </Typography>
      <Grid container spacing={12}>
        {ourTeam.map((team, i) => (
          <Grid key={i} item xs={10} md={4}>
            <MoAvatar sx={{ boxShadow: 3 }}>
              <GatsbyImage
                image={
                  team.teamPicture?.localFile.childImageSharp.gatsbyImageData
                }
                alt={team.teamName}
              />
            </MoAvatar>
            <MoCard
              sx={{
                boxShadow: 3,
                height: "200px",
                display: "flex",
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <CardContent>
                <MoTypography
                  sx={{ fontWeight: "Bold" }}
                  color="grey.50"
                  gutterBottom
                >
                  {team.teamName}
                </MoTypography>
                <Typography variant="body2" color="grey.50">
                  {team.teamShortDescription.substring(0, 100)}
                  <Link
                    to={team.teamUrl}
                    style={{
                      cursor: "pointer",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    ...
                  </Link>
                </Typography>
              </CardContent>
            </MoCard>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default OurTeam
