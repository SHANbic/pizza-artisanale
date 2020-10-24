import React, { useState } from "react"
import Pizzas from "./pizzas"
import Desserts from "./desserts"
import Boissons from "./boissons"
import Menus from "./menus"

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("pizzas")
  let SelectedCategory
  if (menuCategory === "pizzas") {
    SelectedCategory = Pizzas
  } else if (menuCategory === "menus") {
    SelectedCategory = Menus
  } else if (menuCategory === "boissons") {
    SelectedCategory = Boissons
  } else if (menuCategory === "desserts") {
    SelectedCategory = Desserts
  } else {
    SelectedCategory = Pizzas
  }

  return (
    <section className="menu">
      <h2>La carte</h2>
      <ul className="menu-headers">
        <li
          className={`menu-header ${menuCategory === "menus" ? "active" : ""}`}
          onClick={() => setMenuCategory("menus")}
        >
          Menus
        </li>
        <li
          className={`menu-header  ${
            menuCategory === "pizzas" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("pizzas")}
        >
          Pizzas
        </li>

        <li
          className={`menu-header ${
            menuCategory === "boissons" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("boissons")}
        >
          Boissons
        </li>
        <li
          className={`menu-header ${
            menuCategory === "desserts" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("desserts")}
        >
          Desserts
        </li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu
