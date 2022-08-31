import { useStaticQuery, graphql } from "gatsby"

export const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      wpPage(databaseId: { eq: 14 }) {
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
                  placeholder: BLURRED
                  webpOptions: { quality: 100 }
                )
              }
            }
          }
        }
        contactusFieldGroup {
          title
          generalQuestions {
            frequentlyAskedQuestion
            answer
          }
        }
      }
    }
  `)
  return data
}
