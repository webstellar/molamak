import React from "react"
import { MoAvatar, MoCard, MoGrid } from "./OurSolution.style"
import { Typography, CardContent, Grid, Button } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { GatsbyImage } from "gatsby-plugin-image"

const OurSolutions = ({ ourSolution }) => {
  return (
    <>
      <Grid container spacing={12}>
        {ourSolution.map((solution, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={12}
            container
            direction={i % 2 === 0 ? "row" : "row-reverse"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid xs={12} md={7} justifyContent="space-between">
              <Typography
                variant="h4"
                gutterBottom={true}
                align="left"
                sx={{ fontWeight: "Bold" }}
              >
                {solution.solutionName}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                gutterBottom={true}
                sx={{ fontSize: "16px", marginBottom: "1rem" }}
              >
                {solution.solutionDescription}
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIosIcon />}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Read more
              </Button>
            </Grid>
            <MoGrid xs={12} md={4}>
              <MoAvatar sx={{ boxShadow: 3 }}></MoAvatar>
              <MoCard
                sx={{
                  boxShadow: 0,
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <GatsbyImage
                    image={
                      solution.solutionFeaturedImage.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={solution.solutionName}
                    style={{
                      borderStartEndRadius: "20px",
                      borderEndEndRadius: "20px",
                      borderEndStartRadius: "20px",
                    }}
                  />
                </CardContent>
              </MoCard>
            </MoGrid>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default OurSolutions
