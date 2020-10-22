import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6, sort: { fields: [timestamp], order: [DESC] }) {
        edges {
          node {
            id
            likes
            username
            timestamp
            localFile {
              childImageSharp {
                fixed(width: 280, height: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  const instaPosts = data.allInstaNode.edges
  return (
    <div className="insta">
      <h2>
        Suivez notre flux Instagram{" "}
        <a href={`https://www.instagram.com/${instaPosts[0].node.username}/`} target="_blank" rel="noreferrer">
          @<span className="cool-link">{instaPosts[0].node.username}</span>
        </a>
      </h2>

      <ul className="insta-posts">
        {instaPosts.map(({ node }) => {
          return (
            <li key={node.id} className="insta-post">
              <Img fixed={node.localFile.childImageSharp.fixed} />
              <a href={`https://www.instagram.com/p/${node.id}/`}>
                <div className="overlay">
                  {node.likes ? (
                    <>
                      <img
                        className="icon"
                        src={require("../images/like.png")}
                        alt="like icon"
                      />
                      <p className="text">{node.likes}</p>
                    </>
                  ) : (
                    <p className="text" style={{ textAlign: "center" }}>
                      Soyez la première personne à aimer ça
                    </p>
                  )}
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Instagram
