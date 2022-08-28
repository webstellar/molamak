import { useStaticQuery, graphql } from "gatsby"

export const useSolutionQuery = () => {
  const data = useStaticQuery(graphql`
    query SolutionQuery {
      wpPage(databaseId: { eq: 17 }) {
        solutionsFieldGroup {
          solutions {
            solutionName
            solutionDescription
            solutionFeaturedImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    formats: [AUTO, WEBP, PNG, JPG]
                    placeholder: BLURRED
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
