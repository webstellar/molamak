import { useStaticQuery, graphql } from "gatsby"

export const useSolutionQuery = () => {
  const data = useStaticQuery(graphql`
    query SolutionQuery {
      wpPage(databaseId: { eq: 17 }) {
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
                  placeholder: BLURRED
                  width: 1920
                  formats: [AUTO, WEBP]
                  quality: 100
                  webpOptions: { quality: 100 }
                )
              }
            }
          }
        }
        solutionsFieldGroup {
          solutions {
            solutionName
            solutionDescription
            solutionLink
            solutionFeaturedImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    width: 1920
                    formats: [AUTO, WEBP]
                    quality: 100
                    webpOptions: { quality: 100 }
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
