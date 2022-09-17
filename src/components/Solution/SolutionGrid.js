import React from "react"
import { useSolutionQuery } from "../../hooks/useSolutionQuery"
import { GatsbyImage } from "gatsby-plugin-image"
import { Card, CardActions, CardContent, Typography, Grid } from "@mui/material"
import { MoAvatar, MoButton, MoLink } from "./SolutionGrid.styles"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const SolutionGrid = () => {
  const {
    wpPage: { solutionsFieldGroup: data },
  } = useSolutionQuery()

  const solutions = data.solutions

  return (
    <>
      {solutions.map(solution => (
        <Grid item key={solution} xs={12} sm={6} md={3}>
          <MoAvatar sx={{ width: 95, height: 95 }}>
            <GatsbyImage
              image={
                solution?.solutionFeaturedImage?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt="solution featured image"
            />
          </MoAvatar>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "baseline",
              pt: 6,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold" }}
                color="text.primary"
                gutterBottom
              >
                {solution.solutionName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {solution.solutionDescription.substring(0, 150)}
                <MoLink
                  to={solution.solutionLink}
                  style={{ textDecoration: "none", color: "#1A237E" }}
                >
                  ...
                </MoLink>
              </Typography>
            </CardContent>
            <CardActions>
              <MoButton size="small" endIcon={<ArrowForwardIosIcon />}>
                <MoLink
                  to={solution.solutionLink}
                  style={{ textDecoration: "none" }}
                >
                  Read More
                </MoLink>
              </MoButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default SolutionGrid
