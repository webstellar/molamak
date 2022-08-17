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
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
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
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return data
}
