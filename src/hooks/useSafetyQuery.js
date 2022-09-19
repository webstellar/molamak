import { useStaticQuery, graphql } from "gatsby"

export const useSafetyQuery = () => {
  const data = useStaticQuery(graphql`
    query safetyQuery {
      wpPage(databaseId: { eq: 23 }) {
        seo {
          title
          metaKeywords
          metaDesc
        }
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
