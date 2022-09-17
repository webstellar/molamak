import { useStaticQuery, graphql } from "gatsby"

export const useFooterMenuQuery = () => {
  //tag function
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      wpMenu(name: { eq: "Footer Menu" }) {
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
