import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import Instagram from "../components/instagram"
import GoogleMap from "../components/googleMap"

const IndexPage = ({ data }) => {
  let { isClosed } = data.contentfulRestaurant
  const openHours = [
    [
      [0, 0],
      [18.25, 21],
    ],
    [
      [11, 14.5],
      [18.25, 21],
    ],
  ]
  const isRestaurantNowOpen = () => {
    if (!isClosed) {
      const now = new Date()
      const day = now.getDay()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const intTime = parseFloat(hours + (minutes / 60) * 10)
      if (day === 0) {
        return openHours[0].some(
          opening => opening[0] <= intTime && intTime <= opening[1]
        )
      } else {
        return openHours[1].some(
          opening => opening[0] <= intTime && intTime <= opening[1]
        )
      }
    }
  }

  return (
    <Layout>
      <SEO />
      <section className="hero">
        <div className="logo">
          <img
            src={require("../images/logo.jpg")}
            alt="logo de pizza artisanale"
          />
          <div className="open">
            <p>
              <span
                className={`pulse-button ${
                  isRestaurantNowOpen() ? "green" : "red"
                }`}
              />
              {isRestaurantNowOpen() ? "ouvert" : "fermé"}
            </p>
            <p>
              <a href="tel:0782178257">07 82 17 82 57</a>
            </p>
          </div>
        </div>
        <Img
          fluid={data.pizzaHero.childImageSharp.fluid}
          className="hero-image"
        />
        <div className="title">
          <h1>
            Pizzas artisanales 100% maison, <br />
            les meilleures de la région Melun - Vert Saint Denis
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
              alt="le chef au travail"
              fluid={data.photo1.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <div className="advertising">
        <p>du lundi au samedi</p>
        <p>11H00 - 14h30 / 18h15 - 21h30</p>
        <p>
          <a href="tel:0782178257">07 82 17 82 57</a>
        </p>
      </div>
      <section className="container">
        <Menu />
        <Instagram />
      </section>
      {typeof window !== "undefined" && <GoogleMap />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    pizzaHero: file(relativePath: { eq: "pizza-hero-min.jpg" }) {
      ...fluidImage
    }
    photo1: file(relativePath: { eq: "photo-1.jpg" }) {
      ...fluidImage
    }
    logo: file(relativePath: { eq: "logo.jpg" }) {
      ...fluidImage
    }
    contentfulRestaurant {
      isClosed
    }
  }
`

export default IndexPage
