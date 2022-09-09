import { useStaticQuery, graphql } from "gatsby"

export const useSecurityQuery = () => {
  const data = useStaticQuery(graphql`
    query securityQuery {
      wpPage(databaseId: { eq: 20 }) {
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
      }
    }
  `)

  return data
}
