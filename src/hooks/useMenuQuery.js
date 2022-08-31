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
            uri
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
    }
  `)

  return data
}
