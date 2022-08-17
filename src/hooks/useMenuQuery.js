import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  //tag function
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      wpMenu(name: { eq: "Primary Menu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                id
                title
                uri
                label
              }
            }
          }
        }
      }
      allWpMediaItem(filter: { title: { eq: "molamak@3x" } }) {
        edges {
          node {
            sourceUrl
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
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
