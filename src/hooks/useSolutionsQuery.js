import { useStaticQuery, graphql } from "gatsby"

export const useSolutionsQuery = () => {
  const data = useStaticQuery(graphql`
    query SolutionsQuery {
      wpSolution {
        title
        uri
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  width: 1920
                  height: 360
                  formats: [AUTO, WEBP]
                  webpOptions: { quality: 80 }
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
                  formats: [AUTO, WEBP]
                  webpOptions: { quality: 80 }
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
