import React from "react"
import { useSolutionQuery } from "../../hooks/useSolutionQuery"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Grid,
} from "@mui/material"
import { MoAvatar } from "./SolutionGrid.styles"
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
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "baseline",
            }}
          >
            <MoAvatar sx={{ width: 95, height: 95 }}>
              <GatsbyImage
                image={
                  solution?.solutionFeaturedImage?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt="solution featured image"
              />
            </MoAvatar>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {solution.solutionName}
              </Typography>
              <Typography variant="body2">
                {solution.solutionDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" endIcon={<ArrowForwardIosIcon />}>
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default SolutionGrid
