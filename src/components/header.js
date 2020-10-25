import React from "react"
//import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  return (
    <header>
      {/* <img src={props.data.logo.childImageSharp.fluid}></img> */}
      {/*  <span>{props.siteTitle}</span> */}
      {/* <img
        className="icon"
        src={require("../images/logo-pizza-artisanale.jpg")}
        alt="like icon"
      /> */}
      {/* <span>65 Park Row, EH1 4PE</span> */}
    </header>
  )
}

/* Header.propTypes = {
  siteTitle: PropTypes.string,
  data: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  data: ``,
} */

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default Header
