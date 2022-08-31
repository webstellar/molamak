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
                gatsbyImageData(width: 720, formats: [AUTO, WEBP])
              }
            }
          }
          reinforcementStatement {
            reinforcementStatement
            reinforcementStatementButton
            reinforcementStatementBackground {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    quality: 100
                    webpOptions: { quality: 100 }
                    height: 480
                  )
                }
              }
            }
          }
          slider {
            slideButton
            slideText
            slideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    width: 1920
                    formats: [AUTO, WEBP]
                    quality: 100
                    webpOptions: { quality: 100 }
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
