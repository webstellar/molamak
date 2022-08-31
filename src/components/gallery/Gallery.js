import React from "react"
import Masonry from "@mui/lab/Masonry"
import { GatsbyImage } from "gatsby-plugin-image"

const Gallery = ({ itemData }) => {
  return (
    <div>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <GatsbyImage
              image={item.localFile?.childImageSharp?.gatsbyImageData}
              alt="molamak solutions"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default Gallery
