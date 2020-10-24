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
          <span>lundi - samedi : 11:00 - 14:30, 18:15 - 21:00</span>
          <span>dimanche : 18:15 - 21:00</span>
        </div>
        <div className="contact">
          <h3>Nous contacter</h3>
          <a href="tel:0782178257">tél : 07 82 17 82 57</a>
          <a
            href="https://www.instagram.com/pizzaartisanale/"
            target="_blank"
            rel="noreferrer"
          >
            @pizzaartisanale
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
