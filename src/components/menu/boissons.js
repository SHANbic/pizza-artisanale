import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Boissons = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBoissons {
        edges {
          node {
            id
            name
            price
            description {
              description
            }
          }
        }
      }
    }
  `)

  const items = data.allContentfulBoissons.edges
  return (
    <div>
      <ul className="menu-items-grid">
        {items.map(({ node }) => {
          return (
            <li key={node.id} className="menu-item">
              <h3>
                {node.name}
                <span className="price" style={{ marginLeft: "20px" }}>
                  {(node.price || 1.5).toString().replace(".", ",")}€
                </span>
              </h3>
              <p>{node.description.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Boissons
