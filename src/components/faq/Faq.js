import * as React from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { MoTypography } from "./Faq.styles"

const Faq = ({ questions }) => {
  return (
    <>
      <MoTypography
        variant="h2"
        gutterBottom={true}
        align="left"
        sx={{ fontWeight: "bold" }}
      >
        General Questions
      </MoTypography>
      {questions.map(question => (
        <div>
          <Accordion key={question} sx={{ boxShadow: 0, marginBottom: "1rem" }}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ color: "text.primary", fontWeight: "bold" }}
            >
              <Typography variant="h6">
                {question.frequentlyAskedQuestion}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Faq
