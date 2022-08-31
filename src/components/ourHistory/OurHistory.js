import React from "react"
import { Typography, Card, CardContent } from "@mui/material"
import { MoAvatar, MoDiv } from "./OurHistory.styles"
import "./ourhistory.css"

const OurHistory = ({ ourHistory }) => {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom={true}
        align="right"
        sx={{ fontWeight: "Bold" }}
      >
        Our History
      </Typography>
      {ourHistory.map((history, i) => {
        const twoFigures = history.year.toString().substr(-2)
        return (
          <MoDiv>
            <div key={i} className={i % 2 === 0 ? "row" : "row-reverse"}>
              <MoAvatar sx={{ boxShadow: 3 }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                  color="text.primary"
                >
                  {twoFigures}
                </Typography>
              </MoAvatar>
            </div>

            <Card
              sx={{
                boxShadow: 3,
                bgcolor: "grey.50",
                height: "200px",
                display: "flex",
                alignItems: "center",
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontWeight: "Bold" }}
                  color="text.primary"
                  gutterBottom
                >
                  {history.keyArea}
                </Typography>
                <Typography variant="body2">{history.historyText}</Typography>
              </CardContent>
            </Card>
          </MoDiv>
        )
      })}
    </>
  )
}

export default OurHistory
