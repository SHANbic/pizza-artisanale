import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="container" style={{ padding: "10%", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#eee" }}>Pas de pizza par ici!</h1>
      <Link to="/" style={{ color: "#eee" }}>
        Revenir à la page d'accueil
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
