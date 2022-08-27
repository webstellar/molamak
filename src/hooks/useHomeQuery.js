import { useStaticQuery, graphql } from "gatsby"

export const useHomeQuery = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      wpPage(databaseId: { eq: 28 }) {
        id
        homepageFieldGroup {
          clientLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 720
                  formats: [AUTO, WEBP, PNG, JPG]
                  placeholder: BLURRED
                )
              }
            }
          }
          reinforcementStatement {
            reinforcementStatement
            reinforcementStatementButton
          }
          slider {
            slideButton
            slideText
            slideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    formats: [AUTO, WEBP, PNG, JPG]
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    quality: 80
                    webpOptions: { quality: 70 }
                    height: 600
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  return data
}
