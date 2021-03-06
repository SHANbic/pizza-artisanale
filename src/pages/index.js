import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
//import Instagram from "../components/instagram"
import GoogleMap from "../components/googleMap"

const IndexPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  let { isClosed, pizzaHero, photo1 } = data
  useEffect(() => {
    const openHours = [
      [
        [0, 0],
        [18, 21],
      ],
      [
        [11, 14],
        [18, 21],
      ],
    ]
    if (!isClosed) {
      const now = new Date()
      const day = now.getDay()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const intTime = parseFloat(hours + minutes / 60)
      setIsOpen(
        openHours[day === 0 ? 0 : 1].some(
          opening => opening[0] <= intTime && intTime <= opening[1]
        )
      )
    }
    setHasLoaded(true)
  }, [data.contentfulRestaurant])

  return (
    <Layout>
      <SEO title="Pizza Artisanale 77 - Melun - Vert Saint Denis" />
      <section className="hero">
        <div className="logo">
          <img
            src={require("../images/logo-pizza-artisanale.jpg")}
            alt="logo de pizza artisanale"
          />
          <div className="open">
            <p>
              {hasLoaded && (
                <span className={`pulse-button ${isOpen ? "green" : "red"}`} />
              )}
              <span style={{ visibility: hasLoaded ? "visible" : "hidden" }}>
                {isOpen ? "ouvert" : "fermé"}
              </span>
            </p>

            <p>
              <a href="tel:0782178257">07 82 17 82 57</a>
            </p>
          </div>
        </div>
        <Img fluid={pizzaHero.childImageSharp.fluid} className="hero-image" />
        <div className="title">
          <h1>
            Pizzas artisanales 100% maison,
            <br />
            les meilleures de la région Melun - Vert Saint Denis (77)
          </h1>
        </div>
      </section>
      <section className="container">
        <div className="about">
          <div className="about-text">
            <h2>Le mot du chef</h2>
            <p>
              Pâtes fraîches à fermentation lente. Sauce tomate maison
              retravaillée avec de l'ail du basilic sel poivre..... Patate
              poivrons poulet tout est cuit et cuisiné sur place et retravaillé.
              <br />
              AUCUN PRODUIT CONGELÉ
            </p>
          </div>
          <div className="about-image">
            <Img
              title="le chef au travail"
              alt="le chef de pizza artisanale au travail"
              fluid={photo1.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <div className="opening">
        <p className="opening-days">du lundi au samedi</p>
        <p className="opening-hours">11H00 - 14h00 / 18h00 - 21h00</p>
        <p className="opening-days" style={{ marginTop: "20px" }}>
          le dimanche
        </p>
        <p className="opening-hours">18h00 - 21h00</p>
        <p className="opening-phone" style={{ marginTop: "20px" }}>
          <a href="tel:0782178257">07 82 17 82 57</a>
        </p>
      </div>
      <section className="container">
        <Menu />
        {/* <Instagram /> */}
      </section>
      {typeof window !== "undefined" && <GoogleMap />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    pizzaHero: file(relativePath: { eq: "pizza-artisanale-hero-min.jpg" }) {
      ...fluidImage
    }
    photo1: file(relativePath: { eq: "photo-chef-pizza-artisanale-min.jpg" }) {
      ...fluidImage
    }
    logo: file(relativePath: { eq: "logo-pizza-artisanale.jpg" }) {
      ...fluidImage
    }
    contentfulRestaurant {
      isClosed
    }
  }
`

export default IndexPage
