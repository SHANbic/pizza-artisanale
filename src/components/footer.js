import React from "react"
import ContactForm from "./contactForm"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <section>
        <ContactForm />
      </section>
      <section>
        <div className="address">
          <h3>Où sommes-nous?</h3>
          <span>10 route départementale 306</span>
          <span>77240 Vert-Saint-Denis</span>
        </div>
        <div className="hours">
          <h3>Heures d'ouvertures</h3>
          <span>lundi - samedi : 11h - 14h30, 18h15 - 21h</span>
          <span>dimanche : 18h15 - 21h</span>
        </div>
        <div className="contact">
          <h3>Nous contacter</h3>
          <a href="tel:0782178257">07 82 17 82 57</a>
          <a
            href="https://www.facebook.com/julienavzd/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="facebook-logo">
              <img
                src={require("../images/facebook-logo.jpg")}
                alt="logo facebook"
              />
              Pizza artisanale
            </span>
          </a>
        </div>
      </section>
      <p className="copyright">
        &copy; Créé par
        <a href="https://github.com/SHANbic" target="_blank" rel="noreferrer">
          LoveDev
        </a>{" "}
        - 2020
      </p>
    </footer>
  )
}

export default Footer
