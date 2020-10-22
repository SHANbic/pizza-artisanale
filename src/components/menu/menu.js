import React, { useState } from "react"
import Pizzas from "./pizzas"
import Desserts from "./desserts"
import HotDrinks from "./hot-drinks"
import ColdDrinks from "./cold-drinks"

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("pizzas")
  let SelectedCategory
  if (menuCategory === "pizzas") {
    SelectedCategory = Pizzas
  } /* else if (menuCategory === "coldDrinks") {
    SelectedCategory = ColdDrinks
  } */ /* else if (menuCategory === "hotDrinks") {
    SelectedCategory = HotDrinks
  } */ else if (
    menuCategory === "desserts"
  ) {
    SelectedCategory = Desserts
  } else {
    SelectedCategory = Pizzas
  }

  return (
    <section className="menu">
      <h2>La carte</h2>
      <ul className="menu-headers">
        <li
          className={`menu-header  ${
           menuCategory === "pizzas" ? "active" : ""
          }`}
          onClick={() => setMenuCategory("pizzas")}
        >
          Pizzas
        </li>
        {/* <li
          className="menu-header"
          onClick={() => setMenuCategory("hotDrinks")}
        >
          Hot Drinks
        </li> */}
        {/* <li
          className="menu-header"
          onClick={() => setMenuCategory("coldDrinks")}
        >
          Cold Drinks
        </li> */}
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
