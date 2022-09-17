import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      wpPage(databaseId: { eq: 11 }) {
        content
        title
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  formats: [AUTO, WEBP]
                  quality: 100
                  webpOptions: { quality: 100 }
                  placeholder: BLURRED
                )
              }
            }
          }
        }

        aboutusFieldGroup {
          ourHistory {
            historyText
            keyArea
            year
          }
          ourTeam {
            teamName
            teamShortDescription
            teamUrl
            teamPicture {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    formats: [WEBP, AUTO]
                    placeholder: BLURRED
                    webpOptions: { quality: 100 }
                    quality: 100
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
