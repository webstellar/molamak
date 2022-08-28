import { useStaticQuery, graphql } from "gatsby"

export const useSolutionsQuery = () => {
  const data = useStaticQuery(graphql`
    query SolutionsQuery {
      wpSolution {
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  width: 1920
                  height: 360
                  formats: [AUTO, WEBP, PNG, JPG]
                  webpOptions: { quality: 100 }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        solutions {
          gallery {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  width: 1920
                  height: 360
                  formats: [AUTO, WEBP, PNG, JPG]
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
