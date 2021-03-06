import React, { useState } from "react"
import Pizzas from "./pizzas"
import Desserts from "./desserts"
import Boissons from "./boissons"
import Menus from "./menus"

const Menu = ({ partners }) => {
  const [menuCategory, setMenuCategory] = useState("Pizzas")
  let SelectedCategory
  if (menuCategory === "Pizzas") {
    SelectedCategory = Pizzas
  } else if (menuCategory === "Formules") {
    SelectedCategory = Menus
  } else if (menuCategory === "Boissons") {
    SelectedCategory = Boissons
  } else if (menuCategory === "Sucrées") {
    SelectedCategory = Desserts
  } else {
    SelectedCategory = Pizzas
  }
  return (
    <section className="menu">
      <h2>
        La carte{" "}
        <a
          href={require("../../images/carte-pizza-artisanale.jpg")}
          target="_blank"
          rel="noreferrer"
        >
          (au format image ici)
        </a>
      </h2>
      <ul className="menu-headers">
        <li
          className={`menu-header ${
            menuCategory === "Formules" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("Formules")}
        >
          Formules
        </li>
        <li
          className={`menu-header  ${
            menuCategory === "Pizzas" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("Pizzas")}
        >
          Pizzas
        </li>

        <li
          className={`menu-header ${
            menuCategory === "Boissons" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("Boissons")}
        >
          Boissons
        </li>
        <li
          className={`menu-header ${
            menuCategory === "Sucrées" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("Sucrées")}
        >
          Sucrées
        </li>
      </ul>
      <SelectedCategory />
      <div className="partners">
        <strong>Pizza Artisanale au service de ses clients</strong>
        <div>
          <div className="logo-wrapper">
            <img src={require("../../images/cb-logo.jpg")} alt="logo cb" />
          </div>
          <div className="logo-wrapper">
            <img
              src={require("../../images/ticket-restaurant-logo.jpg")}
              alt="logo ticketrestaurant"
            />
          </div>
          <a
            href="https://www.facebook.com/julienavzd"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo-wrapper facebook">
              <img
                src={require("../../images/facebook-logo.jpg")}
                alt="logo facebook"
                title="Rejoignez notre page Facebook"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/pizzaartisanale/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo-wrapper instagram">
              <img
                src={require("../../images/instagram-logo.jpg")}
                alt="logo Instagram"
                title="Consultez notre flux Instagram"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
