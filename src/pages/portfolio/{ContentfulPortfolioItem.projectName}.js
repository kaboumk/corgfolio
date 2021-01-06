import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($id: String = "") {
    contentfulPortfolioItem(id: { eq: $id }) {
      projectName
      screenshot {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
      description {
        json
      }
    }
  }
`

export default function PortfolioItem({ data }) {
  const item = data.contentfulPortfolioItem
  const description = documentToReactComponents(item.description.json)
  return (
    <>
      <h1>{item.projectName}</h1>
      <Image fluid={item.screenshot.fluid} alt={item.screenshot.description} />
      <div>{description}</div>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </>
  )
}
